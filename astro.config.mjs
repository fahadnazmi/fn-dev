import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // Replace with your deployed URL (needed for sitemap / canonical URLs)
  site: "https://your-domain.com",

  integrations: [mdx()],
});