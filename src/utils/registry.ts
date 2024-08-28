import { chainMetadata } from "@hyperlane-xyz/registry";
import type { ChainMetadata, ChainName } from "@hyperlane-xyz/sdk";
import { useMemo } from "react";

const ABACUS_WORKS_DEPLOYER_NAME = "abacus works";

// Chains that Abacus Works has deployed (formerly known as 'core' chains)
export function getAbacusWorksChains(isTestnet = false): ChainMetadata[] {
  return Object.values(chainMetadata).filter(
    (metadata: ChainMetadata) =>
      metadata.deployer?.name.trim().toLowerCase() ===
        ABACUS_WORKS_DEPLOYER_NAME && !!metadata.isTestnet === isTestnet
  );
}

export function getAbacusWorksChainNames(isTestnet = false): ChainName[] {
  return getAbacusWorksChains(isTestnet).map((metadata) => metadata.name);
}

export function useAbacusWorksChainNames(isTestnet = false) {
  return useMemo(() => getAbacusWorksChainNames(isTestnet), [isTestnet]);
}
