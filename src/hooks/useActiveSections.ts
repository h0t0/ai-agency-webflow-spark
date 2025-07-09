import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

const useActiveSections = () => {
  const [activeSections, setActiveSections] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadActiveSections = async () => {
      try {
        const { data: sections, error } = await supabase
          .from('section_configs')
          .select('section_id, is_active')
          .order('order_index');

        if (error) {
          console.error('Error loading sections:', error);
          // Fallback to default sections
          setActiveSections({
            hero: true,
            services: true,
            stats: true,
            cta: true
          });
        } else if (sections) {
          const activeMap = sections.reduce((acc: Record<string, boolean>, section) => {
            acc[section.section_id] = section.is_active;
            return acc;
          }, {});
          setActiveSections(activeMap);
        }
      } catch (error) {
        console.error('Error loading sections:', error);
        // Fallback to default sections
        setActiveSections({
          hero: true,
          services: true,
          stats: true,
          cta: true
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadActiveSections();

    // Set up real-time subscription for section config changes
    const channel = supabase
      .channel('section-config-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'section_configs'
        },
        () => {
          loadActiveSections();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const isSectionActive = (sectionId: string): boolean => {
    return activeSections[sectionId] ?? true;
  };

  return {
    activeSections,
    isSectionActive,
    isLoading
  };
};

export { useActiveSections };