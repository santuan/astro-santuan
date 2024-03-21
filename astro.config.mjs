import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-stn.vercel.app/",
  integrations: [tailwind(), vue(), prefetch(), sitemap(), robotsTxt()]
});