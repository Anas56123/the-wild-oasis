import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://spsasiitirgjxwtyhhdo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwc2FzaWl0aXJnanh3dHloaGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwNjY0MzgsImV4cCI6MjAyNTY0MjQzOH0.T1kfSo5qgmWqdhOy4FzjqV8FGujbTw_9wOuF2Baj12k";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
