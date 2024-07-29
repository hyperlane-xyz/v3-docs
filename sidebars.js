/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // getstartedSidebar: [{type: 'autogenerated', dirName: '.'}],

  getstartedSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Choosing Hyperlane",
    },
   /**
    {
      type: "doc",
      id: "your-first-message",
      label: "Send your first message",
    },
    */
    {
      type: "category",
      label: "Connect Your Chain",
      link: {
        type: "doc",
        id: "deploy-hyperlane",
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "deploy-hyperlane-troubleshooting",
          label: "Troubleshooting",
        },
      ],
    },
    {
      type: "category",
      label: "Bridge a Token",
      link: {
        type: "doc",
        id: "guides/deploy-warp-route",
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "guides/deploy-warp-route-UI",
          label: "Deploy a Warp UI",
        },
        {
          type: "doc",
          id: "guides/remove-trusted-relayer",
          label: "Remove Trusted Relayer",
        },
        {
          type: "doc",
          id: "guides/transfer-warp-route-ownership",
          label: "Transfer Warp Route Ownership",
        },
      ],
    },
    {
      type: "doc",
      id: "explorer",
      label: "Using the explorer",
    },
  ],
  referenceSidebar: [
    {
      type: "category",
      label: "General Message Passing",
      link: {
        type: "doc",
        id: "reference/messaging/messaging-interface",
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "reference/messaging/send",
          label: "Send a message",
        },
        {
          type: "doc",
          id: "reference/messaging/receive",
          label: "Receive a message",
        },
      ],
    },
    {
      type: "category",
      label: "Post-Dispatch Hooks",
      link: {
        type: "doc",
        id: "reference/hooks/overview",
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "reference/hooks/interchain-gas",
          label: "Interchain Gas",
        },
        {
          type: "doc",
          id: "reference/hooks/op-stack",
          label: "OP Stack",
        },
        {
          type: "doc",
          id: "reference/hooks/arbitrum-L2-to-L1",
          label: "Arbitrum L2 to L1",
        },
        {
          type: "doc",
          id: "reference/hooks/polygon-pos",
          label: "Polygon PoS",
        },
      ],
    },
    {
      type: "category",
      label: "Interchain Security Modules",
      link: {
        type: "doc",
        id: "reference/ISM/specify-your-ISM",
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "reference/ISM/multisig-ISM-interface",
          label: "Multisig",
        },
        {
          type: "doc",
          id: "reference/ISM/routing-ISM-interface",
          label: "Routing",
        },
        {
          type: "doc",
          id: "reference/ISM/aggregation-ISM-interface",
          label: "Aggregation",
        },
      ],
    },
    {
      type: "category",
      label: "Libraries",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "reference/libraries/mailboxclient",
          label: "Mailbox Client",
        },
        {
          type: "doc",
          id: "reference/libraries/router",
          label: "Router",
        },
        {
          type: "doc",
          id: "reference/libraries/typecasts",
          label: "TypeCasts",
        },
        {
          type: "doc",
          id: "reference/libraries/message",
          label: "Message",
        },
        {
          type: "doc",
          id: "reference/libraries/hookmetadata",
          label: "Standard Hook Metadata",
        },
      ],
    },
    {
      type: "category",
      label: "Applications",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "reference/applications/warp-routes",
          label: "Warp Routes",
        },
        {
          type: "doc",
          id: "reference/applications/interchain-account",
          label: "Interchain Accounts",
        },
      ],
    },
    /**
    {
      type: "category",
      label: "Typescript SDK",
      link: {
        type: "doc",
        id: "reference/typescript-sdk/sdk-overview",
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "reference/typescript-sdk/multiprovider",
          label: "RPC Providers",
        },
        {
          type: "doc",
          id: "reference/typescript-sdk/deploying-contracts",
          label: "Deployment",
        },
        {
          type: "doc",
          id: "reference/typescript-sdk/testing-contracts",
          label: "Interchain Testing",
        },
        {
          type: "doc",
          id: "reference/typescript-sdk/quoting-gas",
          label: "Quoting Gas Payments",
        },
        {
          type: "doc",
          id: "reference/typescript-sdk/app-abstraction",
          label: "App Abstraction",
        },
      ],
    },
    */
    {
      type: "doc",
      id: "reference/contract-addresses",
      label: "Addresses",
    },
    {
      type: "doc",
      id: "reference/domains",
      label: "Domains",
    },
    {
      type: "doc",
      id: "reference/registries",
      label: "Registries",
    },
    {
      type: "doc",
      id: "reference/cli",
      label: "CLI",
    },
    {
      type: "doc",
      id: "reference/glossary",
      label: "Glossary",
    },
  ],

  protocolSidebar: [
    {
      type: "doc",
      id: "protocol/protocol-overview",
      label: "Overview",
    },
    {
      type: "category",
      label: "Mailbox",
      link: {
        type: "doc",
        id: "protocol/mailbox",
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "protocol/interchain-gas-payment",
          label: "Interchain Gas Payment",
        },
      ],
    },
    {
      type: "doc",
      id: "protocol/warp-routes",
      label: "Warp Routes",
    },
    {
      type: "category",
      label: "Interchain Security Modules",
      link: {
        type: "doc",
        id: "protocol/ISM/modular-security",
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "protocol/ISM/multisig-ISM",
          label: "Multisig ISM",
        },
        {
          type: "doc",
          id: "protocol/ISM/routing-ISM",
          label: "Routing ISM",
        },
        {
          type: "doc",
          id: "protocol/ISM/aggregation-ISM",
          label: "Aggregation ISM",
        },
        {
          type: "doc",
          id: "protocol/ISM/ccip-read-ISM",
          label: "CCIP-Read ISM",
        },
        {
          type: "category",
          label: "Community ISMs",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "protocol/ISM/third-party-ISMs/wormhole-ISM",
              label: "Wormhole ISM",
            },
            {
              type: "doc",
              id: "protocol/ISM/third-party-ISMs/optimistic-ISM",
              label: "Optimistic ISM",
            },
            {
              type: "doc",
              id: "protocol/ISM/third-party-ISMs/OPStack-ISM",
              label: "OP Stack ISM",
            },
            {
              type: "doc",
              id: "protocol/ISM/third-party-ISMs/polygon-POS-ISM",
              label: "Polygon PoS ISM",
            },
            {
              type: "doc",
              id: "protocol/ISM/third-party-ISMs/arbitrum-L2-to-L1-ISM",
              label: "Arbitrum L2 to L1 ISM",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Economic Security",
      link: {
        type: "doc",
        id: "protocol/economic-security/economic-security",
      },
      items: [
        {
          type: "doc",
          id: "protocol/economic-security/hyperlane-avs",
          label: "Hyperlane AVS",
        },
      ],
    },
    {
      type: "category",
      label: "Agents",
      link: {
        type: "doc",
        id: "protocol/agents",
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "protocol/agents/relayer",
          label: "Relayer",
        },
        {
          type: "doc",
          id: "protocol/agents/validators",
          label: "Validators",
        },
      ],
    },
    {
      type: "doc",
      id: "protocol/non-evm-implementations",
      label: "Non-EVM implementations",
    },
  ],

  guidesSidebar: [
    {
      type: "doc",
      id: "guides/deploy-hyperlane-local-agents",
      label: "Deploy Hyperlane with Local Agents",
    },
    {
      type: "category",
      label: "Explorer Debugging",
      link: {
        type: "doc",
        id: "guides/explorer/explorer-debugging",
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "guides/explorer/message-debugging",
          label: "Debugging Message Delivery",
        },
        {
          type: "doc",
          id: "guides/explorer/configuring-pi-chains",
          label: "Configuring Permissionless Chains",
        },
        {
          type: "doc",
          id: "guides/explorer/rest-api",
          label: "REST API",
        },
        {
          type: "doc",
          id: "guides/explorer/graphql-api",
          label: "GraphQL API",
        },
      ],
    },
    {
      type: "doc",
      id: "guides/avs-operator-guide",
      label: "AVS Operator Guide",
    },
    {
      type: "doc",
      id: "guides/create-custom-hook-and-ism",
      label: "Create a Hook/ISM",
    },
    {
      type: "doc",
      id: "guides/implementation-guide",
      label: "Implementation Guide",
    },
    {
      type: "category",
      label: "Developer Tips",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "guides/developer-tips/unit-testing",
          label: "Unit Testing",
        },
        {
          type: "doc",
          id: "guides/latencies",
          label: "Latencies",
        },
        {
          type: "doc",
          id: "guides/token-faucets",
          label: "Token Faucets",
        },
      ],
    },
    {
      type: "doc",
      id: "faq",
      label: "FAQ",
    },
  ],

  operateSidebar: [
    {
      type: "category",
      label: "Run Validators",
      link: {
        type: "doc",
        id: "operate/validators/run-validators",
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "operate/validators/validator-signatures-aws",
          label: "AWS Signatures Bucket Setup",
        },
        {
          type: "doc",
          id: "operate/validators/monitoring-alerting",
          label: "Monitoring & Alerting",
        },
      ],
    },
    {
      type: "category",
      label: "Run Relayer",
      link: {
        type: "doc",
        id: "operate/relayer/run-relayer",
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "operate/relayer/message-filtering",
          label: "Message Filtering",
        },
        {
          type: "doc",
          id: "operate/relayer/monitoring-alerting",
          label: "Monitoring & Alerting",
        },
      ],
    },
    {
      type: "doc",
      id: "operate/set-up-agent-keys",
      label: "Agent Keys",
    },
    {
      type: "category",
      label: "Agent Config",
      link: {
        type: "doc",
        id: "operate/agent-config",
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "operate/config-reference",
          label: "Config Reference",
        },
      ],
    },
    {
      type: "doc",
      id: "operate/docker-quickstart",
      label: "Docker Quickstart",
    },
    {
      type: "doc",
      id: "operate/deploy-with-terraform",
      label: "Deploy with Terraform",
    },
  ],
};

module.exports = sidebars;
