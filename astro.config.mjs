import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://astro-stn.vercel.app/",
  integrations: [
    tailwind(),
    vue(),
    prefetch(),
    sitemap(),
  ],
});
