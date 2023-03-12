import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import App from './App';

describe('something truthy and falsy', () => {
  it('renders App', async () => {
    render(<App />);
    expect(screen).toBeDefined();
  });
});
