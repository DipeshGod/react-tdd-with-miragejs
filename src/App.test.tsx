import { render, screen, waitFor } from '@testing-library/react';
import { describe } from 'vitest';
import App from './App';

import { Server, createServer } from 'miragejs';
import { MockServer } from './mirage/mock-server';

let server: Server;
describe('something truthy and falsy', () => {
  beforeEach(() => {
    server = MockServer({ environment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });
  it('renders App', async () => {
    server.create('user', { id: '1', name: 'dipesh' });
    server.create('user', { id: '2', name: 'dipesh2' });
    server.create('user', { id: '3', name: 'dipesh3' });

    render(<App />);
    const userList = await screen.findByTestId('users');
    console.log(userList.outerHTML);
    expect(userList).toBeInTheDocument();

    await waitFor(() => {
      const childs = userList.getElementsByTagName('li');
      expect(childs.length).toBe(3);
    });
  });
});
