import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './bundle-analysis.html', // Output file
      open: true, // Open the generated file automatically
    }),
  ],

  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
