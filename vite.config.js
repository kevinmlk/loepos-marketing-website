import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src', // Set src as the root for the Vite dev server
    base: '/', // Adjust for deployment to a subdirectory if needed
    build: {
        outDir: '../dist', // Output folder for build files (outside src)
        assetsDir: 'assets', // Output folder for assets
        emptyOutDir: true, // Clean output folder before building
        polyfillDynamicImport: true, // Enable dynamic import polyfill
        sourcemap: true, // Enable source maps
        rollupOptions: {
        input: {
            main: 'src/index.html',
            team: 'src/team.html', // Add this line for each page you want to build
            prices: 'src/prijzen.html',
            faq: 'src/faq.html',
            contact: 'src/contact.html',
            nieuwsbrief: 'src/nieuwsbrief.html',
        },
        },
    },
});