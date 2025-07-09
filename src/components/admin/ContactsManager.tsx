import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Search, Filter, Download, Trash2, Edit, Mail, Building, Calendar, CheckSquare, Square } from 'lucide-react';
import { useContacts } from '@/hooks/useContacts';
import { ContactSubmission, contactStatuses, contactPriorities } from '@/types/contacts';
import { toast } from '@/hooks/use-toast';

const ContactsManager = () => {
  const { contacts, updateContact, deleteContact, bulkUpdateStatus, bulkDelete, exportToCSV } = useContacts();
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [sortBy, setSortBy] = useState<'submittedAt' | 'updatedAt' | 'priority'>('submittedAt');
  const [editingContact, setEditingContact] = useState<ContactSubmission | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<ContactSubmission | null>(null);
  const [bulkDeleteConfirm, setBulkDeleteConfirm] = useState(false);

  const [editFormData, setEditFormData] = useState({
    status: 'new' as ContactSubmission['status'],
    priority: 'medium' as ContactSubmission['priority'],
    assignedTo: '',
    notes: ''
  });

  const handleEdit = (contact: ContactSubmission) => {
    setEditingContact(contact);
    setEditFormData({
      status: contact.status,
      priority: contact.priority,
      assignedTo: contact.assignedTo || '',
      notes: contact.notes
    });
    setIsEditDialogOpen(true);
  };

  const handleUpdateContact = () => {
    if (editingContact) {
      updateContact(editingContact.id, editFormData);
      toast({
        title: "Contact Updated",
        description: "Contact information has been updated successfully.",
      });
      setIsEditDialogOpen(false);
      setEditingContact(null);
    }
  };

  const handleDelete = (contact: ContactSubmission) => {
    deleteContact(contact.id);
    toast({
      title: "Contact Deleted",
      description: "Contact has been deleted successfully.",
      variant: "destructive",
    });
    setDeleteConfirm(null);
  };

  const handleBulkStatusUpdate = (status: ContactSubmission['status']) => {
    if (selectedContacts.length === 0) {
      toast({
        title: "No Contacts Selected",
        description: "Please select contacts to update.",
        variant: "destructive",
      });
      return;
    }

    bulkUpdateStatus(selectedContacts, status);
    toast({
      title: "Contacts Updated",
      description: `${selectedContacts.length} contacts marked as ${status}.`,
    });
    setSelectedContacts([]);
  };

  const handleBulkDelete = () => {
    bulkDelete(selectedContacts);
    toast({
      title: "Contacts Deleted",
      description: `${selectedContacts.length} contacts have been deleted.`,
      variant: "destructive",
    });
    setSelectedContacts([]);
    setBulkDeleteConfirm(false);
  };

  const toggleSelectAll = () => {
    if (selectedContacts.length === filteredContacts.length) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(filteredContacts.map(c => c.id));
    }
  };

  const getStatusColor = (status: string) => {
    return contactStatuses.find(s => s.value === status)?.color || 'bg-gray-100 text-gray-800';
  };

  const getPriorityColor = (priority: string) => {
    return contactPriorities.find(p => p.value === priority)?.color || 'bg-gray-100 text-gray-800';
  };

  const filteredContacts = contacts
    .filter(contact => {
      const matchesSearch = 
        contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'all' || contact.status === filterStatus;
      const matchesPriority = filterPriority === 'all' || contact.priority === filterPriority;
      return matchesSearch && matchesStatus && matchesPriority;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'submittedAt':
          return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
        case 'updatedAt':
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        default:
          return 0;
      }
    });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Contact Submissions
            <div className="flex space-x-2">
              <Button variant="outline" onClick={exportToCSV}>
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters and Search */}
          <div className="flex flex-wrap gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {contactStatuses.map(status => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterPriority} onValueChange={setFilterPriority}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                {contactPriorities.map(priority => (
                  <SelectItem key={priority.value} value={priority.value}>
                    {priority.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="submittedAt">Submitted</SelectItem>
                <SelectItem value="updatedAt">Updated</SelectItem>
                <SelectItem value="priority">Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bulk Actions */}
          {selectedContacts.length > 0 && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-800">
                  {selectedContacts.length} contacts selected
                </span>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleBulkStatusUpdate('in-progress')}
                  >
                    Mark In Progress
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleBulkStatusUpdate('resolved')}
                  >
                    Mark Resolved
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setBulkDeleteConfirm(true)}
                    className="text-red-600 border-red-200 hover:bg-red-50"
                  >
                    Delete Selected
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Contacts Table */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleSelectAll}
                className="p-0"
              >
                {selectedContacts.length === filteredContacts.length ? (
                  <CheckSquare className="h-4 w-4" />
                ) : (
                  <Square className="h-4 w-4" />
                )}
              </Button>
              <span className="text-sm text-gray-600">Select All</span>
            </div>

            {filteredContacts.map((contact) => (
              <Card key={contact.id} className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <Checkbox
                        checked={selectedContacts.includes(contact.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedContacts([...selectedContacts, contact.id]);
                          } else {
                            setSelectedContacts(selectedContacts.filter(id => id !== contact.id));
                          }
                        }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-gray-900">
                            {contact.firstName} {contact.lastName}
                          </h3>
                          <Badge className={getStatusColor(contact.status)}>
                            {contactStatuses.find(s => s.value === contact.status)?.label}
                          </Badge>
                          <Badge className={getPriorityColor(contact.priority)}>
                            {contactPriorities.find(p => p.value === contact.priority)?.label}
                          </Badge>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-3 w-3" />
                            <span>{contact.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Building className="h-3 w-3" />
                            <span>{contact.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-3 w-3" />
                            <span>Submitted: {new Date(contact.submittedAt).toLocaleDateString()}</span>
                          </div>
                          <div>
                            <span>Service: {contact.service}</span>
                          </div>
                        </div>

                        <div className="mb-3">
                          <h4 className="font-medium text-gray-900 mb-1">Message:</h4>
                          <p className="text-sm text-gray-600 line-clamp-2">{contact.message}</p>
                        </div>

                        {contact.notes && (
                          <div className="mb-3 p-2 bg-yellow-50 border border-yellow-200 rounded">
                            <h4 className="font-medium text-gray-900 mb-1 text-sm">Notes:</h4>
                            <p className="text-sm text-gray-600">{contact.notes}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(contact)}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setDeleteConfirm(contact)}
                        className="text-red-600 border-red-200 hover:bg-red-50"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredContacts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Mail className="h-12 w-12 mx-auto opacity-50" />
              </div>
              <p className="text-gray-500">No contacts found matching your criteria</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Contact Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Contact</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="status">Status</Label>
                <Select value={editFormData.status} onValueChange={(value: any) => setEditFormData({ ...editFormData, status: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {contactStatuses.map(status => (
                      <SelectItem key={status.value} value={status.value}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="priority">Priority</Label>
                <Select value={editFormData.priority} onValueChange={(value: any) => setEditFormData({ ...editFormData, priority: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {contactPriorities.map(priority => (
                      <SelectItem key={priority.value} value={priority.value}>
                        {priority.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="assignedTo">Assigned To</Label>
              <Input
                id="assignedTo"
                value={editFormData.assignedTo}
                onChange={(e) => setEditFormData({ ...editFormData, assignedTo: e.target.value })}
                placeholder="Admin username"
              />
            </div>

            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                value={editFormData.notes}
                onChange={(e) => setEditFormData({ ...editFormData, notes: e.target.value })}
                placeholder="Add internal notes..."
                rows={3}
              />
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleUpdateContact}>
                Update Contact
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Contact</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this contact submission? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteConfirm && handleDelete(deleteConfirm)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Bulk Delete Confirmation Dialog */}
      <AlertDialog open={bulkDeleteConfirm} onOpenChange={setBulkDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Selected Contacts</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete {selectedContacts.length} selected contacts? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleBulkDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete {selectedContacts.length} Contacts
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ContactsManager;