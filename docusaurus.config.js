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

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/docs/guides/implementation-guide",
            from: [
              "/docs/protocol/spec",
              "/docs/protocol/implementation-guide",
            ],
          },
          {
            to: "/docs/reference/messaging/messaging-interface",
            from: ["/docs/apis-and-sdks/", "/docs/apis-and-sdks/messaging-api"],
          },
          {
            to: "https://v2.hyperlane.xyz/docs/apis-and-sdks/accounts",
            from: ["/docs/apis-and-sdks/accounts"],
          },
          {
            to: "https://v2.hyperlane.xyz/docs/apis-and-sdks/query",
            from: ["/docs/apis-and-sdks/query"],
          },
          {
            to: "https://v2.hyperlane.xyz/docs/build-with-hyperlane/quickstarts/accounts",
            from: ["/docs/build-with-hyperlane/quickstarts/accounts"],
          },
          {
            to: "https://v2.hyperlane.xyz/docs/build-with-hyperlane/quickstarts/queries",
            from: ["/docs/build-with-hyperlane/quickstarts/queries"],
          },
          {
            to: "/docs/reference/applications/warp-routes",
            from: [
              "/docs/apis-and-sdks/warp-api",
              "/docs/build-with-hyperlane/examples",
              "/docs/build-with-hyperlane/quickstarts/hyperlane-quickstart",
              "/docs/apis-and-sdks/building-applications",
              "/docs/apis-and-sdks/building-applications/example-usage",
              "/docs/apis-and-sdks/building-applications/nodejs-sdk",
              "/docs/apis-and-sdks/building-applications/example-usage/helloworld",
              "/docs/apis-and-sdks/building-applications/example-usage/erc20-token",
            ],
          },
          {
            to: "/docs/reference/hooks/interchain-gas",
            from: [
              "/docs/apis-and-sdks/interchain-gas-paymaster-api",
              "/docs/build-with-hyperlane/guides/paying-for-interchain-gas",
              "/docs/build-with-hyperlane/guides/manually-pay-for-interchain-gas",
              "/docs/build-with-hyperlane/guides/which-igp-to-use-and-understanding-gas-amounts",
            ],
          },
          {
            to: "/docs/reference/hooks/overview",
            from: [
              "/docs/apis-and-sdks/hooks",
              "/docs/protocol/sovereign-consensus/hook-ism",
            ],
          },
          {
            to: "/docs/reference/libraries/router",
            from: [
              "/docs/apis-and-sdks/building-applications/writing-contracts",
              "/docs/apis-and-sdks/building-applications/writing-contracts/router",
              "/docs/apis-and-sdks/building-applications/writing-contracts/abacusconnectionclient",
            ],
          },
          {
            to: "/docs/reference/typescript-sdk/testing-contracts",
            from: [
              "/docs/apis-and-sdks/building-applications/nodejs-sdk/testing-contracts",
            ],
          },
          {
            to: "/docs/reference/typescript-sdk/deploying-contracts",
            from: [
              "/docs/apis-and-sdks/building-applications/nodejs-sdk/deploying-contracts",
              "/docs/apis-and-sdks/building-applications/nodejs-sdk/contract-interaction",
            ],
          },
          {
            to: "/docs/reference/typescript-sdk/app-abstraction",
            from: [
              "/docs/apis-and-sdks/building-applications/nodejs-sdk/multiprovider",
            ],
          },
          {
            to: "/docs/reference/typescript-sdk/quoting-gas",
            from: ["/docs/apis-and-sdks/building-applications/nodejs-sdk/gas"],
          },
          {
            to: "/docs/intro",
            from: [
              "/docs/introduction",
              "/docs/build-with-hyperlane/",
              "/docs/introduction/readme",
              "/docs/introduction/getting-started",
              "/docs/introduction/why-should-you-use-hyperlane",
            ],
          },
          {
            to: "/docs/deploy-hyperlane",
            from: [
              "/docs/deploy",
              "/docs/deploy/permissionless-interoperability",
              "/docs/deploy/deploy-hyperlane",
            ],
          },
          {
            to: "/docs/your-first-message",
            from: [
              "/docs/build-with-hyperlane/quickstarts",
              "/docs/build-with-hyperlane/quickstarts/messaging",
            ],
          },
          {
            to: "/docs/guides/deploy-warp-route",
            from: [
              "/docs/build-with-hyperlane/guides",
              "/docs/deploy/deploy-warp-route",
              "/docs/deploy/deploy-warp-route/deploy-a-warp-route",
            ],
          },
          {
            to: "/docs/guides/deploy-warp-route-UI",
            from: [
              "/docs/deploy/deploy-warp-route/deploy-the-ui-for-your-warp-route",
            ],
          },
          {
            to: "/docs/operate/validators/run-validators",
            from: [
              "/docs/operators/validators",
              "/docs/operators/",
              "/docs/operators/validators/setup",
            ],
          },
          {
            to: "/docs/operate/relayer/run-relayer",
            from: [
              "/docs/operators/relayers",
              "/docs/operators/relayers/setup",
            ],
          },
          {
            to: "/docs/protocol/mailbox",
            from: ["/docs/protocol/messaging"],
          },
          {
            to: "/docs/protocol/ISM/modular-security",
            from: ["/docs/protocol/sovereign-consensus"],
          },
          {
            to: "/docs/protocol/economic-security",
            from: ["/docs/protocol/proof-of-stake"],
          },
          {
            to: "/docs/protocol/agents/watchtowers",
            from: ["/docs/protocol/agents/processor"],
          },
          {
            to: "/docs/protocol/ISM/ccip-read-ISM",
            from: ["/docs/protocol/sovereign-consensus/ccip-read-ism"],
          },
          {
            to: "/docs/protocol/ISM/multisig-ISM",
            from: ["/docs/protocol/sovereign-consensus/multisig-ism"],
          },
          {
            to: "/docs/protocol/ISM/aggregation-ISM",
            from: ["/docs/protocol/sovereign-consensus/aggregation-ism"],
          },
          {
            to: "/docs/protocol/ISM/routing-ISM",
            from: ["/docs/protocol/sovereign-consensus/routing-ism"],
          },
          {
            to: "/docs/protocol/ISM/third-party-ISMs/optimistic-ISM",
            from: ["/docs/protocol/sovereign-consensus/optimistic-ism"],
          },
          {
            to: "/docs/protocol/ISM/third-party-ISMs/wormhole-ISM",
            from: ["/docs/protocol/sovereign-consensus/wormhole-ism"],
          },
          {
            to: "/docs/faq",
            from: [
              "/docs/operators/agent-keys",
              "/docs/operators/agent-keys/hexadecimal-key-setup",
              "/docs/operators/agent-keys/aws-setup",
            ],
          },
          {
            to: "/docs/operate/agent-config",
            from: [
              "/docs/operators/agent-configuration",
              "/docs/operators/agent-configuration/configuration-reference",
            ],
          },
          {
            to: "/docs/operate/run-docker-compose",
            from: ["/docs/operators/running-with-docker-compose"],
          },
          {
            to: "/docs/operate/relayer/message-filtering",
            from: ["/docs/operators/relayers/message-filtering"],
          },
          {
            to: "/docs/operate/validators/validator-signatures-aws",
            from: ["/docs/operators/validators/aws-setup"],
          },
          {
            to: "/docs/operate/validators/monitoring-alerting",
            from: ["/docs/operators/validators/monitoring-and-alerting"],
          },
          {
            to: "/docs/protocol/protocol-overview",
            from: [
              "/docs/protocol/",
              "/docs/protocol/permissionless-interoperability",
            ],
          },
          {
            to: "/docs/protocol/mailbox",
            from: ["/docs/protocol/messaging"],
          },
          {
            to: "/docs/protocol/ISM/modular-security",
            from: ["/docs/protocol/sovereign-consensus"],
          },
          {
            to: "/docs/protocol/economic-security",
            from: ["/docs/protocol/proof-of-stake"],
          },
          {
            to: "/docs/protocol/agents/watchtowers",
            from: ["/docs/protocol/agents/processor"],
          },
          {
            to: "/docs/protocol/ISM/ccip-read-ISM",
            from: ["/docs/protocol/sovereign-consensus/ccip-read-ism"],
          },
          {
            to: "/docs/protocol/ISM/multisig-ISM",
            from: ["/docs/protocol/sovereign-consensus/multisig-ism"],
          },
          {
            to: "/docs/protocol/ISM/aggregation-ISM",
            from: ["/docs/protocol/sovereign-consensus/aggregation-ism"],
          },
          {
            to: "/docs/protocol/ISM/routing-ISM",
            from: ["/docs/protocol/sovereign-consensus/routing-ism"],
          },
          {
            to: "/docs/protocol/ISM/third-party-ISMs/optimistic-ISM",
            from: ["/docs/protocol/sovereign-consensus/optimistic-ism"],
          },
          {
            to: "/docs/protocol/ISM/third-party-ISMs/wormhole-ISM",
            from: ["/docs/protocol/sovereign-consensus/wormhole-ism"],
          },
          {
            to: "/docs/faq",
            from: ["/docs/resources", "/docs/resources/faq"],
          },
          {
            to: "/docs/reference/glossary",
            from: ["/docs/resources/glossary"],
          },
          {
            to: "/docs/reference/contract-addresses",
            from: [
              "/docs/resources/addresses",
              "/docs/apis-and-sdks/hooks/addresses",
              "/docs/resources/addresses/permissionless",
            ],
          },
          {
            to: "/docs/reference/domains",
            from: [
              "/docs/resources/domains",
              "/docs/resources/domains/permissionless-domain-identifiers",
            ],
          },
          {
            to: "/docs/explorer",
            from: [
              "/docs/build-with-hyperlane/explorer",
              "/docs/build-with-hyperlane/guides/finding-my-messages",
            ],
          },
          {
            to: "/docs/guides/explorer/explorer-debugging",
            from: [
              "/docs/build-with-hyperlane/troubleshooting",
              "/docs/build-with-hyperlane/explorer/observability",
            ],
          },
          {
            to: "/docs/guides/explorer/configuring-pi-chains",
            from: ["/docs/build-with-hyperlane/explorer/configuring-pi-chains"],
          },
          {
            to: "/docs/guides/explorer/rest-api",
            from: ["/docs/build-with-hyperlane/explorer/rest-api"],
          },
          {
            to: "/docs/guides/explorer/graphql-api",
            from: ["/docs/build-with-hyperlane/explorer/graphql-api"],
          },
          {
            to: "/docs/guides/token-faucets",
            from: ["/docs/resources/token-sources-and-faucets"],
          },
          {
            to: "/docs/guides/latencies",
            from: ["/docs/resources/latencies"],
          },
          {
            to: "/docs/reference/ISM/specify-your-ISM",
            from: [
              "/docs/resources/security",
              "/docs/protocol/sovereign-consensus/interchain-security-modules",
              "/docs/build-with-hyperlane/guides/receive-1",
            ],
          },
          {
            to: "/docs/protocol/interchain-gas-payment",
            from: ["/docs/protocol/interchain-gas-payments"],
          },
          {
            to: "/docs/reference/messaging/send",
            from: ["/docs/apis-and-sdks/messaging-api/send"],
          },
          {
            to: "/docs/reference/messaging/receive",
            from: ["/docs/apis-and-sdks/messaging-api/receive"],
          },
          {
            to: "/docs/guides/developer-tips/unit-testing",
            from: ["/docs/build-with-hyperlane/guides/unit-testing"],
          },
        ],
      },
    ],
  ],

  markdown: {
    mermaid: true,
  },
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
          editUrl: "https://github.com/hyperlane-xyz/v3-docs/tree/main/",
        },
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
            type: "docSidebar",
            sidebarId: "getstartedSidebar",
            position: "left",
            label: "⏩ Get Started",
          },
          {
            type: "docSidebar",
            sidebarId: "guidesSidebar",
            position: "left",
            label: "🧭 Guides",
          },
          {
            type: "docSidebar",
            sidebarId: "referenceSidebar",
            position: "left",
            label: "📖 Reference",
          },
          {
            type: "docSidebar",
            sidebarId: "protocolSidebar",
            position: "left",
            label: "🧠 Protocol",
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
                href: "https://x.com/hyperlane",
              },
            ],
          },
          {
            title: "Contribute",
            items: [
              {
                label: "Bounties",
                to: "https://github.com/search?q=org%3Ahyperlane-xyz+label%3Abounty+is%3Aopen+is%3Aissue&type=issues&s=&o=desc",
              },
              {
                label: "Careers",
                href: "https://jobs.lever.co/Hyperlane",
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
    }),
};

module.exports = config;
