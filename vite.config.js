import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src', // Set src as the root for the Vite dev server
    base: '/', // Adjust for deployment to a subdirectory if needed
    build: {
        outDir: '../dist', // Output folder for build files (outside src)
        assetsDir: 'assets', // Output folder for assets
        emptyOutDir: true, // Clean output folder before building
    },
});