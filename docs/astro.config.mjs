// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";
import starlightTypeDoc from "starlight-typedoc";

// https://astro.build/config
export default defineConfig({
  site: "https://sidisinsane.github.io",
  base: "/vscode-theme-humanuals",
  integrations: [
    starlight({
      title: "Humanuals Theme",
      description:
        "A VS Code theme for dark and light variants rooted in Anthropic's design palette.",
      logo: {
        src: "../assets/icon.svg",
        replacesTitle: true,
      },
      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/sidisinsane/vscode-theme-humanuals",
        },
      ],
      plugins: [
        starlightThemeRapide(),
        starlightTypeDoc({
          entryPoints: [ "../src" ],
          tsconfig: "../tsconfig.json",
          typeDoc: {
            entryPointStrategy: "expand",
            excludePrivate: true,
            excludeInternal: true,
            outputFileStrategy: "modules",
            entryFileName: "index",
          },
        }),
      ],
      sidebar: [
        {
          label: "Overview",
          items: [
            { label: "Introduction", slug: "introduction" },
            { label: "Development", slug: "development" },
          ],
        },
        {
          label: "API Reference",
          autogenerate: { directory: "api" },
        },
      ],
    }),
  ],
});
