// Difficulty polyfilling Buffer in the browser to be consumed by some Solana libs, so we do this instead
import * as buffer from "buffer";
window.Buffer = buffer.Buffer;
import { useState } from "react";

import { CosmWasmCoreAdapter, MultiProtocolCore, MultiProtocolProvider } from "@hyperlane-xyz/sdk";
import { chainMetadata, chainAddresses } from "@hyperlane-xyz/registry";
import { strip0x } from "@hyperlane-xyz/utils";

import ChainDropdown from './ChainDropdown';

// TODO: these should be in the registry, but for now we'll hardcode them.
// Once they're in the registry, we can move away from this.
const addressesOverrides = {
  neutron: {
    mailbox: 'neutron1sjzzd4gwkggy6hrrs8kxxatexzcuz3jecsxm3wqgregkulzj8r7qlnuef4',
  },
  injective: {
    mailbox: 'inj1palm2wtp6urg0c6j4f2ukv5u5ahdcrqek0sapt',
  }
};

export default function NonEvmMessageDelivered({
  chains,
}: {
  chains: string[];
}) {
  const [destinationChain, setDestinationChain] = useState<string>(chains[0]);
  const [messageId, setMessageId] = useState('');
  const [status, setStatus] = useState('');

  const onButtonClick = async () => {
    const strippedMessageId = strip0x(messageId);
    if (strippedMessageId.length !== 64) {
      setStatus(`⛔️ Invalid message ID, must be 32 bytes (64 hex characters)`);
      return;
    }

    const metadata = chainMetadata[destinationChain];
    if (!metadata) {
      setStatus(`⛔️ No metadata found for chain ${destinationChain}`);
      return;
    }

    // The default public Solana RPC aggressively rate limits, so we add another public node to the list
    chainMetadata.solanamainnet.rpcUrls.unshift({
      http: 'https://solana-rpc.publicnode.com'
    });

    const multiProvider = new MultiProtocolProvider(chainMetadata);
    const multiProtocolCore = MultiProtocolCore.fromAddressesMap(
    // @ts-ignore
    {
      ...chainAddresses,
      ...addressesOverrides,
    }, multiProvider);
    const core = multiProtocolCore.adapter(destinationChain);

    setStatus(`⏳ Checking if message is delivered...`);
    
    let delivered = false;
    try {
      switch (metadata.protocol) {
        case 'cosmos':
          const cosmosCore = core as CosmWasmCoreAdapter;
          delivered = await cosmosCore.delivered(strip0x(messageId));
          break;
        default:
          delivered = await core.waitForMessageProcessed(messageId, destinationChain, 0, 1);
          break;
      }
    } catch (e) {
      setStatus(`⛔️ Error checking message delivery: ${e}`);
      return;
    }

    if (delivered) {
      setStatus(`Message successfully delivered: ✅`);
    } else {
      setStatus(`Message not yet delivered: ❌`);
    }
  };

  return (
    <div style={{
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    }}>
        <ChainDropdown
          chain={destinationChain}
          chains={chains}
          label="Destination Chain"
          onChange={setDestinationChain}
        />
        <div>
          Message ID:{"\t"}
          <input
            defaultValue={messageId}
            onChange={(e) => setMessageId(e.target.value)}
            placeholder="0x..."
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1.05em",
            }}
          />
      </div>
      <button
        onClick={onButtonClick}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginTop: "10px",
          fontSize: "1em",
        }}
        className="button button--secondary"
      >Check if delivered</button>
      <div style={{ margin: "10px" }}>
        {status}
      </div>
    </div>
  );
}
