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
    Path:["./dist", "./_astro", "./Compress"]
  })]
});