// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://geronimoanalytics.nl",
  base: "/",
  integrations: [react(), ...(process.env.NODE_ENV === "development" ? [keystatic()] : [])],
  vite: {
    plugins: [tailwindcss()],
  },
});
