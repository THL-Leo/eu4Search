// server/main.ts
import { Hono } from 'https://deno.land/x/hono@v3.11.3/mod.ts';
import { cors } from 'https://deno.land/x/hono@v3.11.3/middleware.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js';
import 'https://deno.land/std@0.224.0/dotenv/load.ts';

const app = new Hono();
app.use('*', cors());

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

app.get('/events/:id', async (c) => {
  const id = c.req.param('id');
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return c.json({ error: error.message }, 500);
  return c.json(data);
});

Deno.serve(app.fetch);
