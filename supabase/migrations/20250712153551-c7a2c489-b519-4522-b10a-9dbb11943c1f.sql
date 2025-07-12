-- First, let's populate the section_configs with actual page sections
INSERT INTO public.section_configs (section_id, name, description, is_active, modified_by, order_index, impact_warning) VALUES
('hero', 'Hero Section', 'Main landing section with title and call-to-action', true, 'system', 1, 'Disabling this will hide the main hero section from the home page'),
('about', 'About Section', 'About us section with company information', true, 'system', 2, 'Disabling this will hide the about section from the home page'),
('services', 'Services Section', 'Services overview and links', true, 'system', 3, 'Disabling this will hide the services section and navigation'),
('case-studies', 'Case Studies Section', 'Portfolio and case studies showcase', true, 'system', 4, 'Disabling this will hide case studies section and navigation'),
('contact', 'Contact Section', 'Contact form and information', true, 'system', 5, 'Disabling this will hide contact section and navigation'),
('blog', 'Blog Section', 'Blog posts and articles', true, 'system', 6, 'Disabling this will hide blog section and navigation'),
('footer', 'Footer Section', 'Website footer with links and information', true, 'system', 7, 'Disabling this will hide the footer from all pages')
ON CONFLICT (section_id) DO UPDATE SET
name = EXCLUDED.name,
description = EXCLUDED.description,
is_active = EXCLUDED.is_active,
modified_by = EXCLUDED.modified_by,
order_index = EXCLUDED.order_index,
impact_warning = EXCLUDED.impact_warning;

-- Create users management table for admin dashboard
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  email TEXT NOT NULL,
  full_name TEXT,
  role TEXT NOT NULL DEFAULT 'user',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_login TIMESTAMP WITH TIME ZONE
);

-- Enable RLS on user_profiles
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for user_profiles
CREATE POLICY "Authenticated users can view user profiles" 
ON public.user_profiles 
FOR SELECT 
USING (auth.role() = 'authenticated'::text);

CREATE POLICY "Authenticated users can manage user profiles" 
ON public.user_profiles 
FOR ALL 
USING (auth.role() = 'authenticated'::text);

-- Create trigger for automatic timestamp updates on user_profiles
CREATE TRIGGER update_user_profiles_updated_at
BEFORE UPDATE ON public.user_profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.user_profiles (user_id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    'user'
  );
  RETURN NEW;
END;
$$;

-- Create trigger for new user registration
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();