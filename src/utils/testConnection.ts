import { supabase } from '@/integrations/supabase/client';

export const testSupabaseConnection = async () => {
  try {
    console.log('Testing Supabase connection...');
    
    // Test basic connection
    const { data: testData, error: testError } = await supabase
      .from('section_configs')
      .select('section_id, name')
      .limit(1);
    
    if (testError) {
      console.error('Connection test failed:', testError);
      return { success: false, error: testError };
    }
    
    console.log('Connection test successful:', testData);
    return { success: true, data: testData };
  } catch (error) {
    console.error('Connection test threw error:', error);
    return { success: false, error };
  }
};

// Test immediately when imported
testSupabaseConnection();