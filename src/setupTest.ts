import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { MockServer } from './mirage/mock-server';
import { Server } from 'miragejs';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

let server: Server;

beforeEach(() => {
  server = MockServer({ environment: 'test' });
});

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  server.shutdown();
  cleanup();
});
