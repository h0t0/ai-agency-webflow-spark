import { useState, useEffect } from 'react';
import { SectionConfig } from '@/types/admin';

export const useActiveSections = () => {
  const [activeSections, setActiveSections] = useState<string[]>([]);

  useEffect(() => {
    const loadActiveSections = () => {
      const saved = localStorage.getItem('sectionConfigs');
      if (saved) {
        const sections: SectionConfig[] = JSON.parse(saved);
        const active = sections.filter(section => section.isActive).map(section => section.id);
        setActiveSections(active);
      } else {
        // Default all sections active
        setActiveSections(['hero', 'services', 'stats', 'cta']);
      }
    };

    loadActiveSections();

    // Listen for storage changes to update in real-time
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'sectionConfigs') {
        loadActiveSections();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const isSectionActive = (sectionId: string) => {
    return activeSections.includes(sectionId);
  };

  return { activeSections, isSectionActive };
};