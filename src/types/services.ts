export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
  thumbnail?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
}

export const serviceCategories: ServiceCategory[] = [
  { id: 'ai-development', name: 'AI Development', description: 'Custom AI model development' },
  { id: 'automation', name: 'Process Automation', description: 'Business process automation' },
  { id: 'analytics', name: 'Data Analytics', description: 'Data analysis and insights' },
  { id: 'consulting', name: 'AI Consulting', description: 'Strategic AI consultation' },
  { id: 'integration', name: 'AI Integration', description: 'AI system integration' }
];