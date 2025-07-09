import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle 
} from '@/components/ui/alert-dialog';
import { 
  Eye, 
  EyeOff, 
  Clock, 
  User, 
  AlertTriangle, 
  RotateCcw,
  CheckSquare,
  Square
} from 'lucide-react';
import { useSectionManager } from '@/hooks/useSectionManager';
import { SectionConfig } from '@/types/admin';
import { toast } from '@/hooks/use-toast';

const SectionManager = () => {
  const { sections, toggleSection, batchToggleSections, emergencyRestore } = useSectionManager();
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean;
    section?: SectionConfig;
    action?: 'toggle' | 'batch' | 'emergency';
    batchAction?: 'enable' | 'disable';
  }>({ isOpen: false });

  const handleSectionToggle = (section: SectionConfig) => {
    if (section.isActive) {
      setConfirmDialog({
        isOpen: true,
        section,
        action: 'toggle'
      });
    } else {
      toggleSection(section.id);
      toast({
        title: "Section Enabled",
        description: `${section.name} has been enabled successfully.`,
      });
    }
  };

  const confirmToggle = () => {
    if (confirmDialog.section) {
      toggleSection(confirmDialog.section.id);
      toast({
        title: confirmDialog.section.isActive ? "Section Disabled" : "Section Enabled",
        description: `${confirmDialog.section.name} has been ${confirmDialog.section.isActive ? 'disabled' : 'enabled'} successfully.`,
        variant: confirmDialog.section.isActive ? "destructive" : "default",
      });
    }
    setConfirmDialog({ isOpen: false });
  };

  const handleBatchAction = (action: 'enable' | 'disable') => {
    if (selectedSections.length === 0) {
      toast({
        title: "No Sections Selected",
        description: "Please select at least one section to perform batch actions.",
        variant: "destructive",
      });
      return;
    }

    setConfirmDialog({
      isOpen: true,
      action: 'batch',
      batchAction: action
    });
  };

  const confirmBatchAction = () => {
    if (confirmDialog.batchAction) {
      batchToggleSections(selectedSections, confirmDialog.batchAction === 'enable');
      toast({
        title: `Sections ${confirmDialog.batchAction === 'enable' ? 'Enabled' : 'Disabled'}`,
        description: `${selectedSections.length} sections have been ${confirmDialog.batchAction}d successfully.`,
        variant: confirmDialog.batchAction === 'disable' ? "destructive" : "default",
      });
      setSelectedSections([]);
    }
    setConfirmDialog({ isOpen: false });
  };

  const handleEmergencyRestore = () => {
    setConfirmDialog({
      isOpen: true,
      action: 'emergency'
    });
  };

  const confirmEmergencyRestore = () => {
    emergencyRestore();
    toast({
      title: "Emergency Restore Complete",
      description: "All sections have been restored and enabled.",
    });
    setSelectedSections([]);
    setConfirmDialog({ isOpen: false });
  };

  const toggleSelectAll = () => {
    if (selectedSections.length === sections.length) {
      setSelectedSections([]);
    } else {
      setSelectedSections(sections.map(s => s.id));
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Section Management
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleEmergencyRestore}
                className="text-orange-600 border-orange-200 hover:bg-orange-50"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Emergency Restore
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Batch Actions */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleSelectAll}
                  className="p-0"
                >
                  {selectedSections.length === sections.length ? (
                    <CheckSquare className="h-4 w-4" />
                  ) : (
                    <Square className="h-4 w-4" />
                  )}
                </Button>
                <span className="text-sm font-medium">
                  {selectedSections.length} of {sections.length} selected
                </span>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBatchAction('enable')}
                  disabled={selectedSections.length === 0}
                >
                  Enable Selected
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBatchAction('disable')}
                  disabled={selectedSections.length === 0}
                  className="text-red-600 border-red-200 hover:bg-red-50"
                >
                  Disable Selected
                </Button>
              </div>
            </div>
          </div>

          {/* Section List */}
          <div className="space-y-4">
            {sections.map((section) => (
              <Card key={section.id} className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Checkbox
                        checked={selectedSections.includes(section.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedSections([...selectedSections, section.id]);
                          } else {
                            setSelectedSections(selectedSections.filter(id => id !== section.id));
                          }
                        }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{section.name}</h3>
                          <Badge variant={section.isActive ? "default" : "secondary"}>
                            {section.isActive ? (
                              <>
                                <Eye className="h-3 w-3 mr-1" />
                                Active
                              </>
                            ) : (
                              <>
                                <EyeOff className="h-3 w-3 mr-1" />
                                Inactive
                              </>
                            )}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{section.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>Modified: {formatDate(section.lastModified)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>By: {section.modifiedBy}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Switch
                        checked={section.isActive}
                        onCheckedChange={() => handleSectionToggle(section)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Confirmation Dialog */}
      <AlertDialog open={confirmDialog.isOpen} onOpenChange={(open) => setConfirmDialog({ isOpen: open })}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <span>Confirm Action</span>
            </AlertDialogTitle>
            <AlertDialogDescription>
              {confirmDialog.action === 'toggle' && confirmDialog.section && (
                <div className="space-y-2">
                  <p>
                    Are you sure you want to {confirmDialog.section.isActive ? 'disable' : 'enable'} the{' '}
                    <strong>{confirmDialog.section.name}</strong>?
                  </p>
                  {confirmDialog.section.isActive && confirmDialog.section.impactWarning && (
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-md">
                      <p className="text-sm text-orange-800">
                        <strong>Impact:</strong> {confirmDialog.section.impactWarning}
                      </p>
                    </div>
                  )}
                </div>
              )}
              {confirmDialog.action === 'batch' && (
                <div className="space-y-2">
                  <p>
                    Are you sure you want to {confirmDialog.batchAction} {selectedSections.length} selected sections?
                  </p>
                  {confirmDialog.batchAction === 'disable' && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-sm text-red-800">
                        <strong>Warning:</strong> This will hide multiple sections from your website visitors.
                      </p>
                    </div>
                  )}
                </div>
              )}
              {confirmDialog.action === 'emergency' && (
                <div className="space-y-2">
                  <p>
                    Are you sure you want to restore all sections? This will enable all currently disabled sections.
                  </p>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> This action will make all sections visible on your website.
                    </p>
                  </div>
                </div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={
                confirmDialog.action === 'toggle' ? confirmToggle :
                confirmDialog.action === 'batch' ? confirmBatchAction :
                confirmEmergencyRestore
              }
              className={
                (confirmDialog.action === 'toggle' && confirmDialog.section?.isActive) ||
                (confirmDialog.action === 'batch' && confirmDialog.batchAction === 'disable')
                  ? "bg-red-600 hover:bg-red-700"
                  : ""
              }
            >
              {confirmDialog.action === 'toggle' && confirmDialog.section?.isActive ? 'Disable' :
               confirmDialog.action === 'toggle' ? 'Enable' :
               confirmDialog.action === 'batch' ? `${confirmDialog.batchAction === 'enable' ? 'Enable' : 'Disable'} Sections` :
               'Restore All'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SectionManager;