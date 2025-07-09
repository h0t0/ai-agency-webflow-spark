import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { LogOut, Settings, Activity, Eye } from 'lucide-react';
import SectionManager from '@/components/admin/SectionManager';
import AuditLog from '@/components/admin/AuditLog';
import PreviewMode from '@/components/admin/PreviewMode';

interface PageContent {
  title: string;
  subtitle: string;
  description: string;
  [key: string]: any;
}

const AdminDashboard = () => {
  const { logout } = useAuth();
  const [homeContent, setHomeContent] = useState<PageContent>({
    title: 'Building the Future with AI',
    subtitle: 'Your Trusted AI Development Partner',
    description: 'We create intelligent solutions that transform businesses and enhance human capabilities through cutting-edge artificial intelligence.',
  });

  const [aboutContent, setAboutContent] = useState<PageContent>({
    title: 'About Our AI Agency',
    subtitle: 'Leading Innovation in Artificial Intelligence',
    description: 'We are a team of experienced AI engineers, data scientists, and strategists passionate about creating intelligent solutions.',
  });

  useEffect(() => {
    // Load saved content from localStorage
    const savedHome = localStorage.getItem('homeContent');
    const savedAbout = localStorage.getItem('aboutContent');
    
    if (savedHome) setHomeContent(JSON.parse(savedHome));
    if (savedAbout) setAboutContent(JSON.parse(savedAbout));
  }, []);

  const saveContent = (type: string, content: PageContent) => {
    localStorage.setItem(`${type}Content`, JSON.stringify(content));
    toast({
      title: "Content saved",
      description: `${type} page content has been updated`,
    });
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="sections" className="space-y-6">
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="sections" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Sections</span>
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>Preview</span>
            </TabsTrigger>
            <TabsTrigger value="audit" className="flex items-center space-x-2">
              <Activity className="h-4 w-4" />
              <span>Audit Log</span>
            </TabsTrigger>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="sections">
            <SectionManager />
          </TabsContent>

          <TabsContent value="preview">
            <PreviewMode />
          </TabsContent>

          <TabsContent value="audit">
            <AuditLog />
          </TabsContent>

          <TabsContent value="home">
            <Card>
              <CardHeader>
                <CardTitle>Edit Home Page</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <Input
                    value={homeContent.title}
                    onChange={(e) => setHomeContent({...homeContent, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subtitle</label>
                  <Input
                    value={homeContent.subtitle}
                    onChange={(e) => setHomeContent({...homeContent, subtitle: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea
                    value={homeContent.description}
                    onChange={(e) => setHomeContent({...homeContent, description: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button onClick={() => saveContent('home', homeContent)}>
                  Save Home Content
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>Edit About Page</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <Input
                    value={aboutContent.title}
                    onChange={(e) => setAboutContent({...aboutContent, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subtitle</label>
                  <Input
                    value={aboutContent.subtitle}
                    onChange={(e) => setAboutContent({...aboutContent, subtitle: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea
                    value={aboutContent.description}
                    onChange={(e) => setAboutContent({...aboutContent, description: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button onClick={() => saveContent('about', aboutContent)}>
                  Save About Content
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Edit Services Page</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Services page editor coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="case-studies">
            <Card>
              <CardHeader>
                <CardTitle>Edit Case Studies Page</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Case studies page editor coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Edit Contact Page</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Contact page editor coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;