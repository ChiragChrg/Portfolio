import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), compress()],
  vite: {
    plugins: [tailwindcss()]
  },
});