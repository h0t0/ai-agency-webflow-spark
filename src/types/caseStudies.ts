export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  challenge: string;
  solution: string;
  results: string;
  date: string;
  images: CaseStudyImage[];
  isFeatured: boolean;
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  category: string;
  tags: string[];
}

export interface CaseStudyImage {
  id: string;
  url: string;
  caption: string;
  alt: string;
}

export const caseStudyCategories = [
  'E-commerce',
  'Healthcare',
  'Manufacturing',
  'Finance',
  'Education',
  'Retail',
  'Technology',
  'Other'
];