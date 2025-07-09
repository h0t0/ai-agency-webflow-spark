import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Plus, Edit, Trash2, Star, Search, Filter, Calendar, User, FileText } from 'lucide-react';
import { useCaseStudies } from '@/hooks/useCaseStudies';
import { CaseStudy, caseStudyCategories } from '@/types/caseStudies';
import { toast } from '@/hooks/use-toast';

const CaseStudiesManager = () => {
  const { caseStudies, addCaseStudy, updateCaseStudy, deleteCaseStudy, toggleFeatured } = useCaseStudies();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCaseStudy, setEditingCaseStudy] = useState<CaseStudy | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<CaseStudy | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const [formData, setFormData] = useState({
    title: '',
    clientName: '',
    challenge: '',
    solution: '',
    results: '',
    date: '',
    category: '',
    tags: '',
    status: 'draft' as 'draft' | 'published',
    isFeatured: false
  });

  const resetForm = () => {
    setFormData({
      title: '',
      clientName: '',
      challenge: '',
      solution: '',
      results: '',
      date: '',
      category: '',
      tags: '',
      status: 'draft',
      isFeatured: false
    });
    setEditingCaseStudy(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.clientName || !formData.challenge || !formData.solution || !formData.results) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const caseStudyData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      images: [],
      createdBy: 'admin'
    };

    if (editingCaseStudy) {
      updateCaseStudy(editingCaseStudy.id, caseStudyData);
      toast({
        title: "Case Study Updated",
        description: `${formData.title} has been updated successfully.`,
      });
    } else {
      addCaseStudy(caseStudyData);
      toast({
        title: "Case Study Added",
        description: `${formData.title} has been added successfully.`,
      });
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const handleEdit = (caseStudy: CaseStudy) => {
    setEditingCaseStudy(caseStudy);
    setFormData({
      title: caseStudy.title,
      clientName: caseStudy.clientName,
      challenge: caseStudy.challenge,
      solution: caseStudy.solution,
      results: caseStudy.results,
      date: caseStudy.date,
      category: caseStudy.category,
      tags: caseStudy.tags.join(', '),
      status: caseStudy.status,
      isFeatured: caseStudy.isFeatured
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (caseStudy: CaseStudy) => {
    deleteCaseStudy(caseStudy.id);
    toast({
      title: "Case Study Deleted",
      description: `${caseStudy.title} has been deleted successfully.`,
      variant: "destructive",
    });
    setDeleteConfirm(null);
  };

  const filteredCaseStudies = caseStudies
    .filter(caseStudy => {
      const matchesSearch = caseStudy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           caseStudy.clientName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'all' || caseStudy.category === filterCategory;
      const matchesStatus = filterStatus === 'all' || caseStudy.status === filterStatus;
      return matchesSearch && matchesCategory && matchesStatus;
    })
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Case Studies Management
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={resetForm}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Case Study
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingCaseStudy ? 'Edit Case Study' : 'Add New Case Study'}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Case Study Title"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="clientName">Client Name *</Label>
                      <Input
                        id="clientName"
                        value={formData.clientName}
                        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                        placeholder="Client Company Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {caseStudyCategories.map(category => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="date">Project Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="status">Status</Label>
                      <Select value={formData.status} onValueChange={(value: any) => setFormData({ ...formData, status: value })}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="challenge">Challenge *</Label>
                    <Textarea
                      id="challenge"
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      placeholder="Describe the client's challenge..."
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="solution">Solution *</Label>
                    <Textarea
                      id="solution"
                      value={formData.solution}
                      onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                      placeholder="Describe the solution provided..."
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="results">Results *</Label>
                    <Textarea
                      id="results"
                      value={formData.results}
                      onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                      placeholder="Describe the results achieved..."
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="tags">Tags (comma-separated)</Label>
                    <Input
                      id="tags"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      placeholder="AI, Machine Learning, Automation"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.isFeatured}
                      onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                      className="rounded"
                    />
                    <Label htmlFor="featured">Featured Case Study</Label>
                  </div>

                  <div className="flex justify-end space-x-2 pt-4">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      {editingCaseStudy ? 'Update Case Study' : 'Add Case Study'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters and Search */}
          <div className="flex flex-wrap gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {caseStudyCategories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Case Studies List */}
          <div className="space-y-4">
            {filteredCaseStudies.map((caseStudy) => (
              <Card key={caseStudy.id} className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-900 text-lg">{caseStudy.title}</h3>
                        {caseStudy.isFeatured && (
                          <Badge className="bg-yellow-100 text-yellow-800">
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                        <Badge variant={caseStudy.status === 'published' ? "default" : "secondary"}>
                          {caseStudy.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{caseStudy.clientName}</span>
                        </div>
                        {caseStudy.category && (
                          <Badge variant="outline" className="text-xs">
                            {caseStudy.category}
                          </Badge>
                        )}
                        {caseStudy.date && (
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(caseStudy.date).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleFeatured(caseStudy.id)}
                        className={caseStudy.isFeatured ? "text-yellow-600 border-yellow-200" : ""}
                      >
                        <Star className={`h-3 w-3 ${caseStudy.isFeatured ? 'fill-current' : ''}`} />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(caseStudy)}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setDeleteConfirm(caseStudy)}
                        className="text-red-600 border-red-200 hover:bg-red-50"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Challenge</h4>
                      <p className="text-gray-600 line-clamp-3">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Solution</h4>
                      <p className="text-gray-600 line-clamp-3">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Results</h4>
                      <p className="text-gray-600 line-clamp-3">{caseStudy.results}</p>
                    </div>
                  </div>

                  {caseStudy.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <FileText className="h-12 w-12 mx-auto opacity-50" />
              </div>
              <p className="text-gray-500">No case studies found matching your criteria</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Case Study</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{deleteConfirm?.title}"? This action cannot be undone.
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
    </div>
  );
};

export default CaseStudiesManager;