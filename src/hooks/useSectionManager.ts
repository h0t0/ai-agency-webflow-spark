import { useState, useEffect } from 'react';
import { SectionConfig, AuditLogEntry } from '@/types/admin';
import { supabase } from '@/integrations/supabase/client';
import { testSupabaseConnection } from '@/utils/testConnection';


export const useSectionManager = () => {
  const [sections, setSections] = useState<SectionConfig[]>([]);
  const [auditLog, setAuditLog] = useState<AuditLogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSections();
    loadAuditLog();
  }, []);

  const loadSections = async () => {
    try {
      console.log('Testing connection first...');
      const testResult = await testSupabaseConnection();
      console.log('Test result:', testResult);
      
      console.log('Loading sections...');
      const { data, error } = await supabase
        .from('section_configs')
        .select('*')
        .order('order_index');

      if (error) {
        console.error('Error loading sections:', error);
        console.log('Error details:', JSON.stringify(error, null, 2));
        return;
      }

      const formattedSections: SectionConfig[] = data?.map(section => ({
        id: section.section_id,
        name: section.name,
        description: section.description,
        isActive: section.is_active,
        lastModified: section.last_modified,
        modifiedBy: section.modified_by,
        order: section.order_index,
        impactWarning: section.impact_warning
      })) || [];

      setSections(formattedSections);
    } catch (error) {
      console.error('Error loading sections:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadAuditLog = async () => {
    try {
      const { data, error } = await supabase
        .from('section_audit_log')
        .select('*')
        .order('timestamp', { ascending: false })
        .limit(100);

      if (error) {
        console.error('Error loading audit log:', error);
        return;
      }

      const formattedLog: AuditLogEntry[] = data?.map(entry => ({
        id: entry.id,
        timestamp: entry.timestamp,
        action: entry.action as 'enabled' | 'disabled' | 'modified',
        sectionId: entry.section_id,
        sectionName: entry.section_name,
        user: entry.user_email,
        previousState: entry.previous_state,
        newState: entry.new_state
      })) || [];

      setAuditLog(formattedLog);
    } catch (error) {
      console.error('Error loading audit log:', error);
    }
  };

  const addAuditEntry = async (entry: Omit<AuditLogEntry, 'id' | 'timestamp'>) => {
    try {
      const { error } = await supabase
        .from('section_audit_log')
        .insert({
          section_id: entry.sectionId,
          section_name: entry.sectionName,
          action: entry.action,
          user_email: entry.user,
          previous_state: entry.previousState,
          new_state: entry.newState
        });

      if (error) {
        console.error('Error adding audit entry:', error);
      } else {
        loadAuditLog(); // Refresh audit log
      }
    } catch (error) {
      console.error('Error adding audit entry:', error);
    }
  };

  const toggleSection = async (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    const newState = !section.isActive;

    try {
      const { error } = await supabase
        .from('section_configs')
        .update({ 
          is_active: newState,
          last_modified: new Date().toISOString(),
          modified_by: 'admin'
        })
        .eq('section_id', sectionId);

      if (error) {
        console.error('Error toggling section:', error);
        return;
      }

      await addAuditEntry({
        action: newState ? 'enabled' : 'disabled',
        sectionId: section.id,
        sectionName: section.name,
        user: 'admin',
        previousState: section.isActive,
        newState: newState
      });

      loadSections(); // Refresh sections
    } catch (error) {
      console.error('Error toggling section:', error);
    }
  };

  const batchToggleSections = async (sectionIds: string[], enable: boolean) => {
    try {
      const { error } = await supabase
        .from('section_configs')
        .update({ 
          is_active: enable,
          last_modified: new Date().toISOString(),
          modified_by: 'admin'
        })
        .in('section_id', sectionIds);

      if (error) {
        console.error('Error batch toggling sections:', error);
        return;
      }

      // Add audit entries for each section
      for (const sectionId of sectionIds) {
        const section = sections.find(s => s.id === sectionId);
        if (section) {
          await addAuditEntry({
            action: enable ? 'enabled' : 'disabled',
            sectionId: section.id,
            sectionName: section.name,
            user: 'admin',
            previousState: section.isActive,
            newState: enable
          });
        }
      }

      loadSections(); // Refresh sections
    } catch (error) {
      console.error('Error batch toggling sections:', error);
    }
  };

  const emergencyRestore = async () => {
    try {
      const { error } = await supabase
        .from('section_configs')
        .update({ 
          is_active: true,
          last_modified: new Date().toISOString(),
          modified_by: 'admin (emergency restore)'
        })
        .in('section_id', sections.map(s => s.id));

      if (error) {
        console.error('Error in emergency restore:', error);
        return;
      }

      await addAuditEntry({
        action: 'enabled',
        sectionId: 'all',
        sectionName: 'All Sections',
        user: 'admin (emergency restore)',
        previousState: false,
        newState: true
      });

      loadSections(); // Refresh sections
    } catch (error) {
      console.error('Error in emergency restore:', error);
    }
  };

  return {
    sections,
    auditLog,
    isLoading,
    toggleSection,
    batchToggleSections,
    emergencyRestore
  };
};