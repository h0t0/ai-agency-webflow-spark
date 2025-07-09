-- Create tables for admin dashboard section management
CREATE TABLE public.section_configs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section_id TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  last_modified TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  modified_by TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  impact_warning TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create audit log table for tracking changes
CREATE TABLE public.section_audit_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section_id TEXT NOT NULL,
  section_name TEXT NOT NULL,
  action TEXT NOT NULL CHECK (action IN ('enabled', 'disabled', 'modified')),
  user_email TEXT NOT NULL,
  previous_state BOOLEAN,
  new_state BOOLEAN,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create page content table for storing editable content
CREATE TABLE public.page_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_name TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  content JSONB DEFAULT '{}',
  last_modified TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  modified_by TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.section_configs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.section_audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_content ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users (admin access)
CREATE POLICY "Authenticated users can view section configs" 
ON public.section_configs 
FOR SELECT 
USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can modify section configs" 
ON public.section_configs 
FOR ALL 
USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can view audit log" 
ON public.section_audit_log 
FOR SELECT 
USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can create audit entries" 
ON public.section_audit_log 
FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can view page content" 
ON public.page_content 
FOR SELECT 
USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can modify page content" 
ON public.page_content 
FOR ALL 
USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_section_configs_updated_at
  BEFORE UPDATE ON public.section_configs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_page_content_updated_at
  BEFORE UPDATE ON public.page_content
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default section configurations
INSERT INTO public.section_configs (section_id, name, description, is_active, modified_by, order_index, impact_warning) VALUES
('hero', 'Hero Section', 'Main banner with title and call-to-action buttons', true, 'system', 1, 'Disabling this will remove the main hero banner from the home page'),
('services', 'Services Section', 'Overview of AI services offered', true, 'system', 2, 'This will hide all service information from the home page'),
('stats', 'Statistics Section', 'Company statistics and achievements', true, 'system', 3, 'Statistics will no longer be visible to visitors'),
('cta', 'Call-to-Action Section', 'Final conversion section with contact buttons', true, 'system', 4, 'This will remove the main conversion section from the home page');

-- Insert default page content
INSERT INTO public.page_content (page_name, title, subtitle, description, modified_by) VALUES
('home', 'Building the Future with AI', 'Your Trusted AI Development Partner', 'We create intelligent solutions that transform businesses and enhance capabilities through cutting-edge AI.', 'system'),
('about', 'About Our AI Agency', 'Leading Innovation in Artificial Intelligence', 'We are a team of experienced AI engineers, data scientists, and strategists passionate about creating intelligent solutions.', 'system');