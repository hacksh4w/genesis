import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    'https://cwctrxooeywqbgglfqbe.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3Y3RyeG9vZXl3cWJnZ2xmcWJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxOTg3NDUsImV4cCI6MjAxNTc3NDc0NX0.fEGMZh6LTkBeQheXtSZbIO6ZlEx--Fk1avdUDp2Dkno'
);