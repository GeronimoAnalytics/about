// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://GeronimoAnalytics.github.io",
  // Keep GitHub Pages base in production, but use root base locally for Keystatic dev routes.
  base: process.env.NODE_ENV === "production" ? "/about" : "/",
  integrations: [react(), ...(process.env.NODE_ENV === "development" ? [keystatic()] : [])],
  vite: {
    plugins: [tailwindcss()],
  },
});
