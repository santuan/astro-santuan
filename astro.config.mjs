import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import solidJs from "@astrojs/solid-js";

export default defineConfig({
  integrations: [tailwind(), react(), svelte(), vue(), solidJs(), astroImageTools]
});