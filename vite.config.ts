// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    root: '.',                    // корень проекта

    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: './index.html',
                games: './pages/games.html',
                about: './pages/about.html',
            },
        },
    },

    server: {
        open: '/pages/index.html',                 // открывать корневой index при запуске
    }
});