import { Hono } from 'https://deno.land/x/hono/mod.ts';
import { supabase } from '../utils/supabase.ts';

const religions = new Hono();

religions.get('/', async (c) => {
  const { data, error } = await supabase.from('religions').select('*');
  if (error) return c.json({ error: error.message }, 500);
  return c.json(data);
});

religions.get('/:id', async (c) => {
  const id = c.req.param('id');
  const { data, error } = await supabase.from('religions').select('*').eq('id', id).single();
  if (error) return c.json({ error: error.message }, 500);
  return c.json(data);
});

export default religions;
