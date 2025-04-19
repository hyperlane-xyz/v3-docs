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
      label: "Overview",
    },
    {
      type: "category",
      label: "Quickstart",
      collapsed: false,
      collapsible: true,
      items: [
        {
          type: "doc",
          id: "guides/deploy-warp-route",
          label: "Bridge a Token",
        },
      ],
    },
    {
      type: "category",
      label: "Applications",
      collapsed: false,
      collapsible: true,
      items: [
        {
          type: "category",
          label: "Warp Routes",
          link: {
            type: "doc",
            id: "protocol/warp-routes/warp-routes-overview",
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "reference/applications/warp-routes",
              label: "Warp Route Interface",
            },
            {
              type: "doc",
              id: "protocol/warp-routes/warp-routes-types",
              label: "Warp Route Types",
            },
            {
              type: "doc",
              id: "protocol/warp-routes/warp-routes-example-usage",
              label: "Warp Route Example Usage",
            },
          ],
        },
        {
          type: "doc",
          id: "reference/applications/interchain-account",
          label: "Interchain Accounts",
        },
      ],
    },
    {
      type: "category",
      label: "Guides",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Set Up Hyperlane on your Chain",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "deploy-hyperlane",
              label: "Deploy to a New Chain",
            },
            {
              type: "doc",
              id: "guides/deploy-hyperlane-local-agents",
              label: "Deploy Hyperlane with Local Agents",
            },
          ],
        },
        {
          type: "doc",
          id: "guides/local-testnet-setup",
          label: "Local Setup: Sending Messages between Anvil Nodes",
        },
        {
          type: "category",
          label: "Warp Routes",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "category",
              label: "EVM Warp Routes",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "protocol/warp-routes/warp-routes-yield-routes",
                  label: "Deploy Yield Routes",
                },
                {
                  type: "doc",
                  id: "protocol/warp-routes/warp-routes-custom-gas-fast-native",
                  label: "Fast Native Transfer via Custom Gas Tokens",
                },
                {
                  type: "doc",
                  id: "guides/extending-warp-route",
                  label: "Extending a Warp Route",
                },
                {
                  type: "doc",
                  id: "guides/xerc20-warp-route-guide",
                  label: "Deploy an xERC20 Warp Route",
                },
                {
                  type: "doc",
                  id: "guides/manage-warp-route-limits",
                  label: "Mangaging Warp Route Limits",
                },
                {
                  type: "doc",
                  id: "protocol/warp-routes/deploy-multicollateral-warp-routes",
                  label: "Deploy Multi-Collateral Warp Routes",
                },
                {
                  type: "doc",
                  id: "guides/multicollateral-warp-route",
                  label: "Multi-Collateral Warp Route Rebalancing",
                },
                {
                  type: "doc",
                  id: "guides/transfer-and-call",
                  label: "Transfer and Call Pattern",
                },
              ],
            },
            {
              type: "category",
              label: "SVM Warp Routes",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "guides/deploy-svm-warp-route",
                  label: "Deploy an SVM Warp Route",
                },
              ],
            },
            {
              type: "doc",
              id: "guides/deploy-evm-svm-warp-route",
              label: "Deploy an EVM <> SVM Warp Route",
            },
            {
              type: "doc",
              id: "guides/deploy-warp-route-UI",
              label: "Deploy a Bridge UI for Hyperlane Warp Routes",
            },
          ],
        },
        {
          type: "category",
          label: "Go to Production",
          link: {
            type: "doc",
            id: "production",
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Core Deployment",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "guides/update-mailbox-default-ism",
                  label: "Update Mailbox Default ISM",
                },
                {
                  type: "doc",
                  id: "guides/transfer-mailbox-ownership",
                  label: "Transfer Mailbox Ownership",
                },
              ],
            },
            {
              type: "category",
              label: "Warp Route Deployment",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "guides/remove-trusted-relayer",
                  label: "Remove Trusted Relayer",
                },
                {
                  type: "doc",
                  id: "guides/transfer-warp-route-ownership",
                  label: "Transfer Ownership",
                },
              ],
            },
          ],
        },
        {
          type: "doc",
          id: "guides/create-custom-hook-and-ism",
          label: "Create a Hook/ISM",
        },
        {
          type: "doc",
          id: "deploy-hyperlane-troubleshooting",
          label: "Troubleshooting",
        },
      ],
    },
    {
      type: "category",
      label: "Resources",
      collapsed: false,
      collapsible: true,
      items: [
        {
          type: "category",
          label: "Hyperlane Explorer",
          link: {
            type: "doc",
            id: "guides/explorer/explorer",
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "guides/explorer/configuring-pi-chains",
              label: "Configuring New Chains in the Hyperlane Explorer",
            },
            {
              type: "doc",
              id: "guides/explorer/graphql-api",
              label: "GraphQL API",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Deployments",
      items: [
        {
          type: "category",
          label: "Contract Addresses",
          items: [
            {
              type: "doc",
              id: "reference/addresses/mailbox-addresses",
              label: "Mailbox",
            },
            {
              type: "doc",
              id: "reference/addresses/interchain-gas-paymaster",
              label: "Interchain Gas Paymaster (Hook)",
            },
            {
              type: "doc",
              id: "reference/addresses/storage-gas-oracle",
              label: "Storage Gas Oracle",
            },
            {
              type: "doc",
              id: "reference/addresses/merkle-tree",
              label: "Merkle Tree (Hook)",
            },
            {
              type: "doc",
              id: "reference/addresses/validator-announce",
              label: "Validator Announce",
            },
            {
              type: "doc",
              id: "reference/addresses/proxy-admin",
              label: "Proxy Admin",
            },
            {
              type: "doc",
              id: "reference/addresses/test-recipient",
              label: "Test Recipient",
            },
            {
              type: "doc",
              id: "reference/addresses/interchain-account-router",
              label: "Interchain Account Router",
            },
          ],
        },
        {
          type: "doc",
          id: "reference/default-ism-validators",
          label: "Default ISM Validators",
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
      ],
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
      label: "Protocol",
      collapsible: true,
      collapsed: true,
      items: [
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
              type: "category",
              label: "General Message Passing",
              collapsible: true,
              collapsed: true,
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
              type: "doc",
              id: "protocol/interchain-gas-payment",
              label: "Interchain Gas Payment",
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
          ],
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
              id: "protocol/ISM/sequence-diagram",
              label: "Sequence Diagram",
            },
            {
              type: "doc",
              id: "protocol/ISM/custom-ISM",
              label: "Override the Default ISM",
            },
            {
              type: "category",
              label: "Standard ISMs",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "category",
                  label: "Multisig ISM",
                  link: {
                    type: "doc",
                    id: "protocol/ISM/multisig-ISM",
                  },
                  items: [
                    {
                      type: "doc",
                      id: "reference/latencies",
                      label: "Latencies",
                    },
                  ],
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
              ],
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
          collapsed: true,
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
      ],
    },
    {
      type: "doc",
      id: "protocol-economics/intro",
      label: "HYPER and Protocol Economics",
    },
    {
      type: "category",
      label: "Developer Tools",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "reference/cli",
          label: "CLI",
        },
        {
          type: "doc",
          id: "reference/deploy-app",
          label: "Deploy App",
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
              id: "guides/token-faucets",
              label: "Token Faucets",
            },
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Alt-VM Implementations & Guides",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "reference/alt-vm-implementations/index",
          label: "Alt-VM implementations",
        },
        {
          type: "doc",
          id: "guides/implementation-guide",
          label: "Implementation Guide",
        },
        {
          type: "doc",
          id: "reference/alt-vm-implementations/cosmos-sdk",
          label: "Cosmos SDK",
        },
      ],
    },
    {
      type: "category",
      label: "Resources",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "guides/message-debugging",
          label: "Debugging Message Delivery",
        },
        {
          type: "doc",
          id: "reference/glossary",
          label: "Glossary",
        },
        {
          type: "doc",
          id: "faq",
          label: "FAQ",
        },
        {
          type: "doc",
          id: "reference/audits",
          label: "Audits",
        },
      ],
    },
  ],
  /*
  guidesSidebar: [
    {
      type: "doc",
      id: "guides/deploy-hyperlane-local-agents",
      label: "Deploy Hyperlane with Local Agents",
    },
    {
      type: "doc",
      id: "guides/implementation-guide",
      label: "Implementation Guide",
    },
  ],*/

  operateSidebar: [
    {
      type: "doc",
      id: "operate/overview-agents",
      label: "Overview",
    },
    {
      type: "doc",
      id: "operate/set-up-agent-keys",
      label: "Key Management",
    },
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
      type: "category",
      label: "Guides",
      collapsible: true,
      collapsed: true,
      items: [
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
        {
          type: "doc",
          id: "guides/avs-operator-guide",
          label: "AVS Operator Guide",
        },
      ],
    },
  ],
};

module.exports = sidebars;
