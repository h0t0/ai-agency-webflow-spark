import { useState, useEffect } from 'react';
import { CaseStudy } from '@/types/caseStudies';

export const useCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const loadCaseStudies = () => {
    const saved = localStorage.getItem('caseStudies');
    if (saved) {
      setCaseStudies(JSON.parse(saved));
    }
    setIsLoading(false);
  };

  const saveCaseStudies = (newCaseStudies: CaseStudy[]) => {
    setCaseStudies(newCaseStudies);
    localStorage.setItem('caseStudies', JSON.stringify(newCaseStudies));
  };

  const addCaseStudy = (caseStudy: Omit<CaseStudy, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newCaseStudy: CaseStudy = {
      ...caseStudy,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    saveCaseStudies([...caseStudies, newCaseStudy]);
    return newCaseStudy;
  };

  const updateCaseStudy = (id: string, updates: Partial<CaseStudy>) => {
    const newCaseStudies = caseStudies.map(caseStudy =>
      caseStudy.id === id
        ? { ...caseStudy, ...updates, updatedAt: new Date().toISOString() }
        : caseStudy
    );
    saveCaseStudies(newCaseStudies);
  };

  const deleteCaseStudy = (id: string) => {
    const newCaseStudies = caseStudies.filter(caseStudy => caseStudy.id !== id);
    saveCaseStudies(newCaseStudies);
  };

  const toggleFeatured = (id: string) => {
    const newCaseStudies = caseStudies.map(caseStudy => {
      if (caseStudy.id === id) {
        return { ...caseStudy, isFeatured: !caseStudy.isFeatured, updatedAt: new Date().toISOString() };
      }
      // Unfeatured other case studies if this one is being featured
      if (caseStudy.isFeatured && caseStudies.find(cs => cs.id === id && !cs.isFeatured)) {
        return { ...caseStudy, isFeatured: false, updatedAt: new Date().toISOString() };
      }
      return caseStudy;
    });
    saveCaseStudies(newCaseStudies);
  };

  return {
    caseStudies,
    isLoading,
    addCaseStudy,
    updateCaseStudy,
    deleteCaseStudy,
    toggleFeatured
  };
};