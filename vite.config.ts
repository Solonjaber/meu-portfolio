import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(() => ({
  // Base path para GitHub Pages
  // Se usar username.github.io (site de usuário), deixe como '/'
  // Se usar repositório específico, use '/nome-do-repo/'
  base: process.env.VITE_BASE_PATH || '/meu-portfolio/',

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },

  // Build otimizado
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild', // Usa esbuild (mais rápido e já incluído)
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'lenis'],
        },
      },
    },
  },
}));
