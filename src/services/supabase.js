import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lnapidhmdwbhnvvprtqo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuYXBpZGhtZHdiaG52dnBydHFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwODY5NDYsImV4cCI6MjAzMDY2Mjk0Nn0.QhM1BXj_P9hIx1mzsaJEskrycMkl9b7Q3gKXLGGH1R0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
