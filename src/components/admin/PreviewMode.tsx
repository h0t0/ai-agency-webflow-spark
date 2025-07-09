import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Monitor, Smartphone, Tablet } from 'lucide-react';
import { useSectionManager } from '@/hooks/useSectionManager';

const PreviewMode = () => {
  const { sections } = useSectionManager();
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const activeSections = sections.filter(section => section.isActive);
  const inactiveSections = sections.filter(section => !section.isActive);

  const getDeviceClass = () => {
    switch (previewDevice) {
      case 'tablet':
        return 'max-w-2xl';
      case 'mobile':
        return 'max-w-sm';
      default:
        return 'max-w-6xl';
    }
  };

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case 'tablet':
        return <Tablet className="h-4 w-4" />;
      case 'mobile':
        return <Smartphone className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Eye className="h-5 w-5" />
              <span>Home Page Preview</span>
            </div>
            <div className="flex items-center space-x-2">
              {(['desktop', 'tablet', 'mobile'] as const).map((device) => (
                <Button
                  key={device}
                  variant={previewDevice === device ? "default" : "outline"}
                  size="sm"
                  onClick={() => setPreviewDevice(device)}
                  className="flex items-center space-x-1"
                >
                  {getDeviceIcon(device)}
                  <span className="capitalize">{device}</span>
                </Button>
              ))}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className={`mx-auto bg-white rounded-lg shadow-lg overflow-hidden ${getDeviceClass()}`}>
              {/* Preview Header */}
              <div className="bg-blue-600 text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded"></div>
                    <span className="font-bold">NeuralFlow</span>
                  </div>
                  <div className="text-sm opacity-75">PREVIEW MODE</div>
                </div>
              </div>

              {/* Active Sections Preview */}
              <div className="divide-y divide-gray-200">
                {activeSections.map((section) => (
                  <div key={section.id} className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{section.name}</h3>
                      <Badge variant="default" className="text-xs">
                        Active
                      </Badge>
                    </div>
                    <div className="bg-gray-50 p-4 rounded border-l-4 border-l-blue-500">
                      <p className="text-sm text-gray-600">{section.description}</p>
                      <div className="mt-2 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded flex items-center justify-center">
                        <span className="text-xs text-gray-500">Section Content Preview</span>
                      </div>
                    </div>
                  </div>
                ))}

                {activeSections.length === 0 && (
                  <div className="p-12 text-center">
                    <div className="text-gray-400 mb-4">
                      <Eye className="h-12 w-12 mx-auto opacity-50" />
                    </div>
                    <p className="text-gray-500">No active sections to display</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Enable sections in the Section Management tab to see them here
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Inactive Sections Notice */}
          {inactiveSections.length > 0 && (
            <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <h4 className="font-medium text-orange-800 mb-2">
                Hidden Sections ({inactiveSections.length})
              </h4>
              <div className="flex flex-wrap gap-2">
                {inactiveSections.map((section) => (
                  <Badge key={section.id} variant="secondary" className="text-xs">
                    {section.name}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-orange-700 mt-2">
                These sections are currently disabled and won't appear on the live website.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PreviewMode;