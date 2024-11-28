// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import codeImport from "remark-code-import";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import { themes } from "prism-react-renderer";
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hyperlane Docs",
  tagline: "the open interoperability framework",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: 'https://polibee.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/v3-docs/',

  // GitHub pages deployment config.
  organizationName: 'polibee', // Usually your GitHub org/user name.
  projectName: 'v3-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  
  markdown: {
    mermaid: true,
    format: 'mdx',
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true
    }
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
    localeConfigs: {
      "zh-Hans": {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-Hans',
      },
    },
  },

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/guides/implementation-guide",
            from: [
              "/protocol/spec",
              "/docs/protocol/spec",
            ],
          },
          {
            to: "/operate/validators/run-validators",
            from: [
              "/operators/validators",
              "/operators/",
              "/docs/operators/validators",
              "/docs/operators/",
            ],
          },
          {
            to: "/guides/token-faucets",
            from: [
              "/resources/token-sources-and-faucets",
              "/docs/resources/token-sources-and-faucets"
            ],
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/docs')) {
            return [
              existingPath.replace('/docs', ''),
              existingPath.replace('/docs', '') + '.mdx',
            ];
          }
          return [existingPath + '.mdx'];
        },
      },
    ],
  ],

  themes: ["@docusaurus/theme-mermaid", "@easyops-cn/docusaurus-search-local"],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [
            [codeImport, { removeRedundantIndentations: true }],
            [remarkMath, {}],
          ],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/polibee/v3-docs/tree/main/",
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
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
            type: "localeDropdown",
            position: "right",
          },
          {
            type: "docSidebar",
            sidebarId: "getstartedSidebar",
            position: "left",
            label: "⏩ Get Started",
          },
          /*
          {
            type: "docSidebar",
            sidebarId: "guidesSidebar",
            position: "left",
            label: "🧭 Guides",
          },*/
          /*{
            type: "docSidebar",
            sidebarId: "referenceSidebar",
            position: "left",
            label: "📖 Reference",
          },*/
          {
            type: "docSidebar",
            sidebarId: "protocolSidebar",
            position: "left",
            label: "📖 Learn",
          },
          {
            type: "docSidebar",
            sidebarId: "operateSidebar",
            position: "left",
            label: "⚙️ Agent Operators",
          },
          {
            href: "https://github.com/polibee",
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
                to: "/docs/protocol/mailbox",
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
                href: "https://github.com/polibee",
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
                href: "https://x.com/hyperlane",
              },
            ],
          },
          {
            title: "Contribute",
            items: [
              {
                label: "Bounties",
                to: "https://github.com/search?q=org%3Apolibee+label%3Abounty+is%3Aopen+is%3Aissue&type=issues&s=&o=desc",
              },
              {
                label: "Careers",
                href: "https://jobs.lever.co/Hyperlane",
              },
            ],
          },
        ],
        copyright: `Copyright ÂŠ ${new Date().getFullYear()} Abacus Works, core developer for Hyperlane
        <br>
        Built IRL in New York â–ª and London â–¬ï¸â€â‚ï¸`,
      },
      prism: {
        additionalLanguages: ["solidity", "diff", "bash"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: {
          light: "base",
          dark: "dark",
        },
        options: {
          // see https://github.com/mermaid-js/mermaid/blob/aa5d586bd64c3aa8e42f6ea60bcd22109b8b4083/packages/mermaid/src/themes/theme-base.js#L55
          themeVariables: {
            primaryColor: "#205AB0",
            secondaryColor: "white",
            tertiaryColor: "white",
            nodeTextColor: "white",
          },
          themeCSS: ".edgeLabel { color: black }",
        },
      },
      search: {
        language: ["zh"],
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        docsRouteBasePath: "/docs",
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50
      },
    }),
};

module.exports = config;
