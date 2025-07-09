export interface SectionConfig {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  lastModified: string;
  modifiedBy: string;
  order: number;
  impactWarning?: string;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  action: 'enabled' | 'disabled' | 'modified';
  sectionId: string;
  sectionName: string;
  user: string;
  previousState?: boolean;
  newState?: boolean;
}

export interface PageContent {
  title: string;
  subtitle: string;
  description: string;
  [key: string]: any;
}