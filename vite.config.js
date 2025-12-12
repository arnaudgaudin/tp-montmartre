import includeHtml from "vite-plugin-include-html";
import { defineConfig } from "vite";
import { resolve } from 'path'

export default defineConfig({
  plugins: [includeHtml()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        presentation: resolve(__dirname, 'pages/presentation.html'),
        blogMontmartre: resolve(__dirname, 'pages/blog-montmartre.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        politiqueConfidentialite: resolve(__dirname, 'pages/politique-confidentialite.html'),
        mentionsLegales: resolve(__dirname, 'pages/mentions-legales.html'),
      }
    }
  }
});