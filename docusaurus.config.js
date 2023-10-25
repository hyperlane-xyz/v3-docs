// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hyperlane v3 Docs',
  tagline: 'Permissionless Interoperability, Modular Security',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Hyperlane',
        logo: {
          alt: 'Hyperlane logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'getstartedSidebar',
            position: 'left',
            label: '⏩ Get Started',
          },
          {
            type: 'docSidebar',
            sidebarId: 'protocolSidebar',
            position: 'left',
            label: '🧠 Protocol',
          },
          {
            type: 'docSidebar',
            sidebarId: 'getstartedSidebar',
            position: 'left',
            label: '🧭 Guides',
          },
          {
            type: 'docSidebar',
            sidebarId: 'getstartedSidebar',
            position: 'left',
            label: '⚙️ Operate',
          },
          {
            type: 'docSidebar',
            sidebarId: 'getstartedSidebar',
            position: 'left',
            label: '📖 Reference',
          },
          {
            href: 'https://github.com/hyperlane-xyz',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Read',
            items: [
              {
                label: 'Blog',
                to: 'https://medium.com/hyperlane',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/hyperlane-xyz',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/hyperlane',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Hyperlane_xyz',
              },
            ],
          },
          {
            title: 'Contribute',
            items: [
              {
                label: 'Bounties',
                to: 'https://www.hyperlane.xyz/bounty',
              },
              {
                label: 'Jobs',
                href: 'https://www.hyperlane.xyz/crew',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Abacus Works, core developer for Hyperlane
        <br>
        Built IRL in New York 🗽 and London 💂🏼‍♂️`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
