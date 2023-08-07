import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import remarkUnwrapImages from "remark-unwrap-images";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	// ! Please remember to replace the following site property with your own domain
	site: "https://milo.solar",
	markdown: {
		remarkPlugins: [remarkUnwrapImages],
		shikiConfig: {
			theme: "dracula",
			wrap: true,
		},
	},
	experimental: {
		assets: true,
	},
	image: {
		// https://docs.astro.build/en/guides/assets/#using-sharp
		service: sharpImageService(),
	},
	integrations: [
		mdx({}),
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		prefetch(),
	],
	compressHTML: true,
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
	output: "server",
	adapter: vercel(),
});
