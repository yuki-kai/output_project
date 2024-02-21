import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/ts/index.tsx'
            ],
            refresh: true,
        }),
        tsconfigPaths(),
    ],
    resolve: {
        alias: {
            "ts": "resources/ts",
        },
    },
});
