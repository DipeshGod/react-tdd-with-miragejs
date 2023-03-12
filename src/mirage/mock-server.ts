import { createServer } from 'miragejs';
import { endpoints } from './endpoints';
import { models } from './models';
import { factories } from './factories';

const MockServer = ({ environment = 'development' }) => {
  const server = createServer({
    environment,
    models,
    factories,
    seeds(server) {
      server.createList('user', 5);
    },
    // timing: 3000,
  });
  // logging
  server.logging = true;

  // external URLs
  // server.post(
  //   `${process.env.RAYGUN_URL}/:any`,
  //   () => new Promise((_res: any) => {})
  // );

  // internal URLs
  // server.urlPrefix = process.env.API_URL ?? '';
  for (const namespace of Object.keys(endpoints)) {
    //@ts-ignore
    endpoints[namespace](server);
  }

  // Reset for everything else
  server.namespace = '';
  server.passthrough();
  // console.log({server})
  console.log({ dump: server.db.dump() });

  return server;
};

export { MockServer };
