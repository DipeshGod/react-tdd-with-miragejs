/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    // vitest config, with helpful vitest typing :)
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.ts',
  },
};

export default defineConfig({
  plugins: [react()],
  test: vitestConfig.test,
  // and now: just vite config
});
