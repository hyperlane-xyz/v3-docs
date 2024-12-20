import { chainAddresses, chainMetadata } from "@hyperlane-xyz/registry";
import { type ChainMetadata, type ChainName } from "@hyperlane-xyz/sdk";
import { useMemo } from "react";

const ABACUS_WORKS_DEPLOYER_NAME = "abacus works";

// Pre-mainnet chains
const FILTER_LIST = ['soneium'];

// Chains that Abacus Works has deployed (formerly known as 'core' chains)
export function getAbacusWorksChains(
  isTestnet = false,
  requireMailbox = true
): ChainMetadata[] {
  return Object.values(chainMetadata).filter((metadata: ChainMetadata) => {
    // Filter to chains whose deployer is Abacus Works
    const isRightDeployer =
      metadata.deployer?.name.trim().toLowerCase() ===
      ABACUS_WORKS_DEPLOYER_NAME;
    // Filter to only mainnets or testnets
    const isRightChainType = !!metadata.isTestnet === isTestnet;
    // If required, filter to chains that have a mailbox addresses in the registry
    const hasMailboxAddress =
      !requireMailbox || !!chainAddresses[metadata.name]?.mailbox;
    // Filter out chains in FILTER_LIST
    const isFiltered = FILTER_LIST.includes(metadata.name);
    return isRightDeployer && isRightChainType && hasMailboxAddress && !isFiltered;
  });
}

export function getAbacusWorksChainNames(isTestnet = false): ChainName[] {
  return getAbacusWorksChains(isTestnet).map((metadata) => metadata.name);
}

export function useAbacusWorksChainNames(isTestnet = false) {
  return useMemo(() => getAbacusWorksChainNames(isTestnet), [isTestnet]);
}
