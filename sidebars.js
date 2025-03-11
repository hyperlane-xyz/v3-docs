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
  mainSidebar: [
    // ===== GETTING STARTED SECTION =====
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "intro",
          label: "Introduction to Hyperlane",
        },
        {
          type: "doc",
          id: "protocol/protocol-overview",
          label: "Protocol Overview",
        },
        {
          type: "doc",
          id: "reference/glossary",
          label: "Key Terms & Concepts",
        },
        {
          type: "doc",
          id: "your-first-message",
          label: "Your First Interchain Message",
        },
      ],
    },

    // ===== QUICKSTART GUIDES SECTION =====
    {
      type: "category",
      label: "Quickstart Guides",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "deploy-hyperlane",
          label: "Deploy Core Protocol",
        },
        {
          type: "doc",
          id: "guides/deploy-warp-route",
          label: "Bridge a Token",
        },
        {
          type: "doc",
          id: "guides/local-testnet-setup",
          label: "Local Development Setup",
        },
        {
          type: "doc",
          id: "deploy-hyperlane-troubleshooting",
          label: "Troubleshooting",
        },
      ],
    },

    // ===== CORE PROTOCOL SECTION =====
    {
      type: "category",
      label: "Core Protocol",
      collapsible: true,
      collapsed: true,
      items: [
        // ----- Mailbox Component -----
        {
          type: "category",
          label: "Mailbox",
          link: {
            type: "doc",
            id: "protocol/mailbox",
          },
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "reference/messaging/send",
              label: "Sending Messages",
            },
            {
              type: "doc",
              id: "reference/messaging/receive",
              label: "Receiving Messages",
            },
            {
              type: "doc",
              id: "protocol/interchain-gas-payment",
              label: "Interchain Gas Payment",
            },
          ],
        },
        
        // ----- Hooks Component -----
        {
          type: "category",
          label: "Post-Dispatch Hooks",
          link: {
            type: "doc",
            id: "reference/hooks/overview",
          },
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "reference/hooks/interchain-gas",
              label: "Interchain Gas Hook",
            },
            {
              type: "doc",
              id: "reference/hooks/op-stack",
              label: "OP Stack Hook",
            },
            {
              type: "doc",
              id: "reference/hooks/arbitrum-L2-to-L1",
              label: "Arbitrum L2 to L1 Hook",
            },
            {
              type: "doc",
              id: "reference/hooks/polygon-pos",
              label: "Polygon PoS Hook",
            },
            {
              type: "doc",
              id: "guides/create-custom-hook-and-ism",
              label: "Creating Custom Hooks",
            },
          ],
        },
        
        // ----- ISM Component -----
        {
          type: "category",
          label: "Interchain Security Modules",
          link: {
            type: "doc",
            id: "protocol/ISM/modular-security",
          },
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "protocol/ISM/sequence-diagram",
              label: "How ISMs Work",
            },
            {
              type: "doc",
              id: "protocol/ISM/custom-ISM",
              label: "Override the Default ISM",
            },
            {
              type: "category",
              label: "Standard ISMs",
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
              ],
            },
            {
              type: "category",
              label: "Chain-Specific ISMs",
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
        
        // ----- Agents Component -----
        {
          type: "category",
          label: "Off-Chain Agents",
          link: {
            type: "doc",
            id: "protocol/agents",
          },
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
            {
              type: "doc",
              id: "guides/deploy-hyperlane-local-agents",
              label: "Running Local Agents",
            },
          ],
        },
        
        // ----- Security Component -----
        {
          type: "category",
          label: "Economic Security",
          link: {
            type: "doc",
            id: "protocol/economic-security/economic-security",
          },
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "protocol/economic-security/hyperlane-avs",
              label: "Hyperlane AVS",
            },
            {
              type: "doc",
              id: "guides/avs-operator-guide",
              label: "AVS Operator Guide",
            },
            {
              type: "doc",
              id: "reference/latencies",
              label: "Security Latencies",
            },
          ],
        },
      ],
    },

    // ===== APPLICATIONS SECTION =====
    {
      type: "category",
      label: "Applications",
      collapsible: true,
      collapsed: true,
      items: [
        // ----- Warp Routes Component -----
        {
          type: "category",
          label: "Warp Routes",
          link: {
            type: "doc",
            id: "protocol/warp-routes/warp-routes-overview",
          },
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "reference/applications/warp-routes",
              label: "Interface & API",
            },
            {
              type: "doc",
              id: "protocol/warp-routes/warp-routes-types",
              label: "Token Types",
            },
            {
              type: "doc",
              id: "protocol/warp-routes/warp-routes-example-usage",
              label: "Example Usage",
            },
            {
              type: "category",
              label: "Common Implementations",
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "guides/xerc20-warp-route-guide",
                  label: "xERC20 Warp Route",
                },
                {
                  type: "doc",
                  id: "protocol/warp-routes/warp-routes-yield-routes",
                  label: "Yield Routes",
                },
                {
                  type: "doc",
                  id: "protocol/warp-routes/warp-routes-custom-gas-fast-native",
                  label: "Fast Native Transfer",
                },
                {
                  type: "doc",
                  id: "guides/deploy-evm-svm-warp-route",
                  label: "EVM-SVM Warp Route",
                },
                {
                  type: "doc",
                  id: "guides/deploy-svm-warp-route",
                  label: "SVM Warp Route",
                },
              ]
            },
            {
              type: "category",
              label: "Management & Customization",
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "guides/extending-warp-route",
                  label: "Extending Warp Routes",
                },
                {
                  type: "doc",
                  id: "guides/manage-warp-route-limits",
                  label: "Managing Limits",
                },
                {
                  type: "doc",
                  id: "guides/transfer-warp-route-ownership",
                  label: "Transferring Ownership",
                },
                {
                  type: "doc",
                  id: "guides/remove-trusted-relayer",
                  label: "Removing Trusted Relayer",
                },
              ]
            },
            {
              type: "doc",
              id: "guides/deploy-warp-route-UI",
              label: "Building a Bridge UI",
            },
          ],
        },
        
        // ----- Interchain Accounts Component -----
        {
          type: "category",
          label: "Interchain Accounts",
          link: {
            type: "doc",
            id: "reference/applications/interchain-account",
          },
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "reference/addresses/interchain-account-router",
              label: "Contract Addresses",
            },
          ],
        },
      ],
    },

    // ===== OPERATIONS SECTION =====
    {
      type: "category",
      label: "Operations",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "operate/overview-agents",
          label: "Agents Overview",
        },
        {
          type: "doc",
          id: "operate/set-up-agent-keys",
          label: "Key Management",
        },
        {
          type: "category",
          label: "Running Validators",
          link: {
            type: "doc",
            id: "operate/validators/run-validators",
          },
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "operate/validators/validator-signatures-aws",
              label: "AWS Signatures Setup",
            },
            {
              type: "doc",
              id: "operate/validators/monitoring-alerting",
              label: "Monitoring & Alerting",
            },
            {
              type: "doc",
              id: "guides/quickstart-validator",
              label: "Validator Quickstart",
            },
          ],
        },
        {
          type: "category",
          label: "Running Relayers",
          link: {
            type: "doc",
            id: "operate/relayer/run-relayer",
          },
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
            {
              type: "doc",
              id: "guides/quickstart-relayer",
              label: "Relayer Quickstart",
            },
          ],
        },
        {
          type: "category",
          label: "Configuration",
          link: {
            type: "doc",
            id: "operate/agent-config",
          },
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "operate/config-reference",
              label: "Config Reference",
            },
            {
              type: "doc",
              id: "operate/docker-quickstart",
              label: "Docker Quickstart",
            },
            {
              type: "doc",
              id: "operate/deploy-with-terraform",
              label: "Using Terraform",
            },
          ],
        },
        {
          type: "category",
          label: "Maintenance",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "guides/update-mailbox-default-ism",
              label: "Update Default ISM",
            },
            {
              type: "doc",
              id: "guides/transfer-mailbox-ownership",
              label: "Transfer Mailbox Ownership",
            },
          ],
        },
      ],
    },

    // ===== DEVELOPER TOOLS SECTION =====
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
          type: "category",
          label: "Hyperlane SDK",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "reference/typescript-sdk/sdk-overview",
              label: "SDK Overview",
            },
            {
              type: "doc",
              id: "reference/typescript-sdk/app-abstraction",
              label: "App Abstraction",
            },
            {
              type: "doc",
              id: "reference/typescript-sdk/multiprovider",
              label: "MultiProvider",
            },
            {
              type: "doc",
              id: "reference/typescript-sdk/quoting-gas",
              label: "Quoting Gas",
            },
            {
              type: "doc",
              id: "reference/typescript-sdk/deploying-contracts",
              label: "Deploying Contracts",
            },
            {
              type: "doc",
              id: "reference/typescript-sdk/testing-contracts",
              label: "Testing Contracts",
            },
          ],
        },
        {
          type: "doc",
          id: "reference/cosmos-sdk",
          label: "Cosmos SDK",
        },
        {
          type: "category",
          label: "Contract Libraries",
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
          label: "Explorer & Debugging",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "guides/explorer/explorer",
              label: "Explorer",
            },
            {
              type: "doc",
              id: "guides/explorer/graphql-api",
              label: "Explorer GraphQL API",
            },
            {
              type: "doc",
              id: "guides/explorer/configuring-pi-chains",
              label: "Adding New Chains",
            },
            {
              type: "doc",
              id: "guides/message-debugging",
              label: "Debugging Message Delivery",
            },
            {
              type: "doc",
              id: "guides/explorer/explorer-debugging",
              label: "Explorer Debugging",
            },
          ],
        },
        {
          type: "category",
          label: "Developer Tips",
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

    // ===== ALT-VM IMPLEMENTATIONS SECTION =====
    {
      type: "category",
      label: "Alt-VM & Custom Implementations",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "protocol/non-evm-implementations",
          label: "Alt-VM Implementations",
        },
        {
          type: "doc",
          id: "guides/implementation-guide",
          label: "Implementation Guide",
        },
      ],
    },

    // ===== REFERENCE SECTION =====
    {
      type: "category",
      label: "Reference",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Contract Addresses",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "reference/addresses/mailbox-addresses",
              label: "Mailbox",
            },
            {
              type: "doc",
              id: "reference/addresses/interchain-gas-paymaster",
              label: "Interchain Gas Paymaster",
            },
            {
              type: "doc",
              id: "reference/addresses/storage-gas-oracle",
              label: "Storage Gas Oracle",
            },
            {
              type: "doc",
              id: "reference/addresses/merkle-tree",
              label: "Merkle Tree Hook",
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
          ],
        },
        {
          type: "category",
          label: "Interface Reference",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "reference/messaging/messaging-interface",
              label: "Messaging Interface",
            },
            {
              type: "doc",
              id: "reference/ISM/multisig-ISM-interface",
              label: "Multisig ISM Interface",
            },
            {
              type: "doc",
              id: "reference/ISM/routing-ISM-interface",
              label: "Routing ISM Interface",
            },
            {
              type: "doc",
              id: "reference/ISM/aggregation-ISM-interface",
              label: "Aggregation ISM Interface",
            },
            {
              type: "doc",
              id: "reference/ISM/specify-your-ISM",
              label: "Specifying ISMs",
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
          label: "Chain Domains",
        },
        {
          type: "doc",
          id: "reference/registries",
          label: "Registry Packages",
        },
        {
          type: "doc",
          id: "reference/audits",
          label: "Security Audits",
        },
        {
          type: "doc",
          id: "faq",
          label: "FAQ",
        },
      ],
    },
  ],
};

module.exports = sidebars;
