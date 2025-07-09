export interface ContactSubmission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  status: 'new' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  submittedAt: string;
  updatedAt: string;
  assignedTo?: string;
  notes: string;
}

export const contactStatuses = [
  { value: 'new', label: 'New', color: 'bg-blue-100 text-blue-800' },
  { value: 'in-progress', label: 'In Progress', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'resolved', label: 'Resolved', color: 'bg-green-100 text-green-800' }
];

export const contactPriorities = [
  { value: 'low', label: 'Low', color: 'bg-gray-100 text-gray-800' },
  { value: 'medium', label: 'Medium', color: 'bg-orange-100 text-orange-800' },
  { value: 'high', label: 'High', color: 'bg-red-100 text-red-800' }
];