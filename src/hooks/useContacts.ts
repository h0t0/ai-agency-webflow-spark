import { useState, useEffect } from 'react';
import { ContactSubmission } from '@/types/contacts';

export const useContacts = () => {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = () => {
    const saved = localStorage.getItem('contacts');
    if (saved) {
      setContacts(JSON.parse(saved));
    } else {
      // Add some sample data for demonstration
      const sampleContacts: ContactSubmission[] = [
        {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          company: 'Tech Corp',
          service: 'custom-ai',
          budget: '50k-100k',
          message: 'We need help with implementing AI in our customer service.',
          status: 'new',
          priority: 'high',
          submittedAt: new Date(Date.now() - 86400000).toISOString(),
          updatedAt: new Date(Date.now() - 86400000).toISOString(),
          notes: ''
        },
        {
          id: '2',
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@startup.com',
          company: 'AI Startup',
          service: 'consultation',
          budget: '10k-25k',
          message: 'Looking for AI strategy consultation for our startup.',
          status: 'in-progress',
          priority: 'medium',
          submittedAt: new Date(Date.now() - 172800000).toISOString(),
          updatedAt: new Date(Date.now() - 86400000).toISOString(),
          assignedTo: 'admin',
          notes: 'Initial consultation scheduled for next week.'
        }
      ];
      setContacts(sampleContacts);
      localStorage.setItem('contacts', JSON.stringify(sampleContacts));
    }
    setIsLoading(false);
  };

  const saveContacts = (newContacts: ContactSubmission[]) => {
    setContacts(newContacts);
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  };

  const updateContact = (id: string, updates: Partial<ContactSubmission>) => {
    const newContacts = contacts.map(contact =>
      contact.id === id
        ? { ...contact, ...updates, updatedAt: new Date().toISOString() }
        : contact
    );
    saveContacts(newContacts);
  };

  const deleteContact = (id: string) => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    saveContacts(newContacts);
  };

  const bulkUpdateStatus = (ids: string[], status: ContactSubmission['status']) => {
    const newContacts = contacts.map(contact =>
      ids.includes(contact.id)
        ? { ...contact, status, updatedAt: new Date().toISOString() }
        : contact
    );
    saveContacts(newContacts);
  };

  const bulkDelete = (ids: string[]) => {
    const newContacts = contacts.filter(contact => !ids.includes(contact.id));
    saveContacts(newContacts);
  };

  const exportToCSV = () => {
    const headers = [
      'Name',
      'Email',
      'Company',
      'Service',
      'Budget',
      'Status',
      'Priority',
      'Submitted',
      'Message'
    ];

    const csvData = contacts.map(contact => [
      `${contact.firstName} ${contact.lastName}`,
      contact.email,
      contact.company,
      contact.service,
      contact.budget,
      contact.status,
      contact.priority,
      new Date(contact.submittedAt).toLocaleDateString(),
      `"${contact.message.replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contacts-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return {
    contacts,
    isLoading,
    updateContact,
    deleteContact,
    bulkUpdateStatus,
    bulkDelete,
    exportToCSV
  };
};