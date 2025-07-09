import { useState, useEffect } from 'react';
import { SectionConfig, AuditLogEntry } from '@/types/admin';

const defaultSections: SectionConfig[] = [
  {
    id: 'hero',
    name: 'Hero Section',
    description: 'Main banner with title and call-to-action buttons',
    isActive: true,
    lastModified: new Date().toISOString(),
    modifiedBy: 'admin',
    order: 1,
    impactWarning: 'Disabling this will remove the main hero banner from the home page'
  },
  {
    id: 'services',
    name: 'Services Section',
    description: 'Overview of AI services offered',
    isActive: true,
    lastModified: new Date().toISOString(),
    modifiedBy: 'admin',
    order: 2,
    impactWarning: 'This will hide all service information from the home page'
  },
  {
    id: 'stats',
    name: 'Statistics Section',
    description: 'Company statistics and achievements',
    isActive: true,
    lastModified: new Date().toISOString(),
    modifiedBy: 'admin',
    order: 3,
    impactWarning: 'Statistics will no longer be visible to visitors'
  },
  {
    id: 'cta',
    name: 'Call-to-Action Section',
    description: 'Final conversion section with contact buttons',
    isActive: true,
    lastModified: new Date().toISOString(),
    modifiedBy: 'admin',
    order: 4,
    impactWarning: 'This will remove the main conversion section from the home page'
  }
];

export const useSectionManager = () => {
  const [sections, setSections] = useState<SectionConfig[]>([]);
  const [auditLog, setAuditLog] = useState<AuditLogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSections();
    loadAuditLog();
  }, []);

  const loadSections = () => {
    const saved = localStorage.getItem('sectionConfigs');
    if (saved) {
      setSections(JSON.parse(saved));
    } else {
      setSections(defaultSections);
      localStorage.setItem('sectionConfigs', JSON.stringify(defaultSections));
    }
    setIsLoading(false);
  };

  const loadAuditLog = () => {
    const saved = localStorage.getItem('sectionAuditLog');
    if (saved) {
      setAuditLog(JSON.parse(saved));
    }
  };

  const saveSections = (newSections: SectionConfig[]) => {
    setSections(newSections);
    localStorage.setItem('sectionConfigs', JSON.stringify(newSections));
  };

  const addAuditEntry = (entry: Omit<AuditLogEntry, 'id' | 'timestamp'>) => {
    const newEntry: AuditLogEntry = {
      ...entry,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    };
    const newLog = [newEntry, ...auditLog].slice(0, 100); // Keep last 100 entries
    setAuditLog(newLog);
    localStorage.setItem('sectionAuditLog', JSON.stringify(newLog));
  };

  const toggleSection = (sectionId: string) => {
    const newSections = sections.map(section => {
      if (section.id === sectionId) {
        const newState = !section.isActive;
        addAuditEntry({
          action: newState ? 'enabled' : 'disabled',
          sectionId: section.id,
          sectionName: section.name,
          user: 'admin',
          previousState: section.isActive,
          newState: newState
        });
        return {
          ...section,
          isActive: newState,
          lastModified: new Date().toISOString(),
          modifiedBy: 'admin'
        };
      }
      return section;
    });
    saveSections(newSections);
  };

  const batchToggleSections = (sectionIds: string[], enable: boolean) => {
    const newSections = sections.map(section => {
      if (sectionIds.includes(section.id)) {
        addAuditEntry({
          action: enable ? 'enabled' : 'disabled',
          sectionId: section.id,
          sectionName: section.name,
          user: 'admin',
          previousState: section.isActive,
          newState: enable
        });
        return {
          ...section,
          isActive: enable,
          lastModified: new Date().toISOString(),
          modifiedBy: 'admin'
        };
      }
      return section;
    });
    saveSections(newSections);
  };

  const emergencyRestore = () => {
    const restoredSections = sections.map(section => ({
      ...section,
      isActive: true,
      lastModified: new Date().toISOString(),
      modifiedBy: 'admin (emergency restore)'
    }));
    saveSections(restoredSections);
    
    addAuditEntry({
      action: 'enabled',
      sectionId: 'all',
      sectionName: 'All Sections',
      user: 'admin (emergency restore)',
      previousState: false,
      newState: true
    });
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