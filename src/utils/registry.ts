import { chainAddresses, chainMetadata } from "@hyperlane-xyz/registry";
import { MultiProtocolProvider, type ChainMetadata, type ChainName } from "@hyperlane-xyz/sdk";
import { deepCopy, objMerge } from "@hyperlane-xyz/utils";
import { useMemo } from "react";

const ABACUS_WORKS_DEPLOYER_NAME = "abacus works";

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
    return isRightDeployer && isRightChainType && hasMailboxAddress;
  });
}

export function getAbacusWorksChainNames(isTestnet = false): ChainName[] {
  return getAbacusWorksChains(isTestnet).map((metadata) => metadata.name);
}

export function useAbacusWorksChainNames(isTestnet = false) {
  return useMemo(() => getAbacusWorksChainNames(isTestnet), [isTestnet]);
}

export function useMultiProtocolProvider() {
  return useMemo(() => {
    const chainMetadataCopied = deepCopy(chainMetadata);
    // The default public Solana RPC aggressively rate limits, so we add another public node to the list
    chainMetadataCopied.solanamainnet.rpcUrls.unshift({
      http: 'https://solana-rpc.publicnode.com'
    });

    return new MultiProtocolProvider(chainMetadataCopied);
  }, []);
}
