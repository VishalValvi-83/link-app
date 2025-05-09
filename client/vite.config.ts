import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite';




export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',    
    sourcemap: false,  
    minify: 'esbuild', 
    target: 'esnext'
  }
});
