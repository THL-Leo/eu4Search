import { Hono } from 'https://deno.land/x/hono/mod.ts';
import religions from './religions.ts';
// import countries from './countries.ts'; // and others as you grow

const routes = new Hono();

routes.route('/religions', religions);
// routes.route('/countries', countries);

export default routes;
