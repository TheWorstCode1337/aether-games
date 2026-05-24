// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',                    // корень проекта

    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                'pages/index': './pages/index.html',
                'pages/games': './pages/games.html',
                'pages/about': './pages/about.html',
            },
        },
    },

    server: {
        open: '/pages/index.html',                 // открывать корневой index при запуске
    }
});