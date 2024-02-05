import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    compress({
      CSS: false,
      HTML: false,
      Image: false,
      JavaScript: true,
      SVG: true,
      Exclude: [
        (File) => File.includes("FadeUp"),
        (File) => File.includes("HeroMotion"),
      ],
    })]
});