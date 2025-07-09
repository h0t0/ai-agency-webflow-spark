import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Clock, User, Activity } from 'lucide-react';
import { useSectionManager } from '@/hooks/useSectionManager';

const AuditLog = () => {
  const { auditLog } = useSectionManager();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getActionColor = (action: string) => {
    switch (action) {
      case 'enabled':
        return 'bg-green-100 text-green-800';
      case 'disabled':
        return 'bg-red-100 text-red-800';
      case 'modified':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'enabled':
        return '✅';
      case 'disabled':
        return '❌';
      case 'modified':
        return '✏️';
      default:
        return '📝';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Activity className="h-5 w-5" />
          <span>Audit Log</span>
          <Badge variant="secondary">{auditLog.length} entries</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          {auditLog.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No audit entries yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {auditLog.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="text-lg">{getActionIcon(entry.action)}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge className={getActionColor(entry.action)}>
                        {entry.action.toUpperCase()}
                      </Badge>
                      <span className="font-medium text-gray-900">
                        {entry.sectionName}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{formatDate(entry.timestamp)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{entry.user}</span>
                      </div>
                    </div>
                    {entry.previousState !== undefined && entry.newState !== undefined && (
                      <div className="mt-1 text-xs text-gray-600">
                        Changed from{' '}
                        <span className={entry.previousState ? 'text-green-600' : 'text-red-600'}>
                          {entry.previousState ? 'Active' : 'Inactive'}
                        </span>{' '}
                        to{' '}
                        <span className={entry.newState ? 'text-green-600' : 'text-red-600'}>
                          {entry.newState ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AuditLog;