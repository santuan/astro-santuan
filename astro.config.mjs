import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import solidJs from "@astrojs/solid-js";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import image from '@astrojs/image';
export default defineConfig({
  site: "https://santuan.vercel.app/",
  integrations: [tailwind(), react(), svelte(), vue(), solidJs(), prefetch(), image(), sitemap()],
})

