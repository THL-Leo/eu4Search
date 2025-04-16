import { Hono } from 'https://deno.land/x/hono/mod.ts';
import { cors } from 'https://deno.land/x/hono/middleware.ts';
import 'https://deno.land/std@0.224.0/dotenv/load.ts';
import routes from './routes/index.ts';

const app = new Hono();
app.use('*', cors());
app.route('/', routes);

Deno.serve(app.fetch);
