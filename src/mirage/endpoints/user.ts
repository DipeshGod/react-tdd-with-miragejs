import { Response, Server } from 'miragejs';
import { AppSchema } from '../types';

export function routesForUsers(server: Server) {
  server.get(`api/users`, (schema: AppSchema, request) => {
    const users = schema.all('user');
    return new Response(200, {}, users);
  });
}
