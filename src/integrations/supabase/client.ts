// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ofquotuithmypvnlzsrf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mcXVvdHVpdGhteXB2bmx6c3JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzNjgzMzAsImV4cCI6MjA1NDk0NDMzMH0.C11Rxqkn7MB3GoXKawWHuJ54HrsFrq82uZnxCrgmPzU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);