import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src', // Set src as the root for the Vite dev server
    build: {
        outDir: '../dist', // Output folder for build files
    },
});