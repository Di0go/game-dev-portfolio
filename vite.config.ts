import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
//import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://di0go.github.io/aboutme",
  plugins: [
    react(),
    legacy()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})
