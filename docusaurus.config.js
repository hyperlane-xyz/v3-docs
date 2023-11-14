// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import codeImport from "remark-code-import";

import { themes } from "prism-react-renderer";
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hyperlane v3 Docs",
  tagline: "Permissionless Interoperability, Modular Security",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://v3.hyperlane.xyz",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "hyperlane-xyz", // Usually your GitHub org/user name.
  projectName: "hyperlane-monorepo", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [[codeImport, { removeRedundantIndentations: true }]],
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: 'https://github.com/hyperlane-xyz/v3-docs/tree/main/'
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import("@docusaurus/types").ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Hyperlane",
        logo: {
          alt: "Hyperlane logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "getstartedSidebar",
            position: "left",
            label: "⏩ Get Started",
          },
          {
            type: "docSidebar",
            sidebarId: "protocolSidebar",
            position: "left",
            label: "🧠 Protocol",
          },
          {
            type: "docSidebar",
            sidebarId: "referenceSidebar",
            position: "left",
            label: "📖 Reference",
          },
          {
            type: "docSidebar",
            sidebarId: "guidesSidebar",
            position: "left",
            label: "🧭 Guides",
          },
          {
            type: "docSidebar",
            sidebarId: "operateSidebar",
            position: "left",
            label: "⚙️ Operate",
          },
          {
            href: "https://github.com/hyperlane-xyz",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/docs/intro",
              },
                            {
                label: "Contract Interfaces",
                to: "/docs/reference/messaging/messaging-interface",
              },
            ],
          },
          {
            title: "Read",
            items: [
              {
                label: "Blog",
                to: "https://medium.com/hyperlane",
              },
              {
                label: "GitHub",
                href: "https://github.com/hyperlane-xyz",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/hyperlane",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Hyperlane_xyz",
              },
            ],
          },
          {
            title: "Contribute",
            items: [
              {
                label: "Bounties",
                to: "https://www.hyperlane.xyz/bounty",
              },
              {
                label: "Jobs",
                href: "https://www.hyperlane.xyz/crew",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Abacus Works, core developer for Hyperlane
        <br>
        Built IRL in New York 🗽 and London 💂🏼‍♂️`,
      },
      prism: {
        additionalLanguages: ["solidity"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: {
          light: "base",
          dark: "base",
        },
        options: {
          // see https://github.com/mermaid-js/mermaid/blob/aa5d586bd64c3aa8e42f6ea60bcd22109b8b4083/packages/mermaid/src/themes/theme-base.js#L55
          themeVariables: {
            mainBkg: "#205AB0",
            nodeTextColor: "white",
            edgeLabelBackground: "#FFFFFF",
            clusterBkg: "white"
          },
          themeCSS: ".edgeLabel { color: black }",
        },
      },
    }),
};

module.exports = config;
