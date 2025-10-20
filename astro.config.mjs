import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          // Enable CSS code splitting
          additionalData: `@import "src/styles/variables.scss";`
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['preact', 'gsap'],
            'utils': ['@studio-freight/lenis']
          }
        }
      }
    }
  },
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    inlineStylesheets: 'auto',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Optimize CSS file naming for better caching
          if (assetInfo.name.endsWith('.css')) {
            return 'styles/[name].[hash][extname]';
          }
          return '[name].[hash][extname]';
        }
      }
    }
  }
});