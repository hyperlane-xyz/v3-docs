import { useState } from "react";
import { CosmWasmCoreAdapter, MultiProtocolCore, MultiProtocolProvider } from "@hyperlane-xyz/sdk";
import { chainMetadata, chainAddresses } from "@hyperlane-xyz/registry";

import ChainDropdown from './ChainDropdown';

// Difficulty polyfilling Buffer in the browser to be consumed by some Solana libs, so we do this instead
import * as buffer from "buffer";
window.Buffer = buffer.Buffer;

// Adding @hyperlane-xyz/utils as a dependency breaks things, so we copy these functions here.
export function strip0x(hexstr: string) {
  return hexstr.startsWith('0x') ? hexstr.slice(2) : hexstr;
}

export function ensure0x(hexstr: string) {
  return hexstr.startsWith('0x') ? hexstr : `0x${hexstr}`;
}

export default function NonEvmMessageDelivered({
  chains,
}: {
  chains: string[];
}) {
  const [originChain, setOriginChain] = useState<string>(chains[0]);
  const [txId, setTxId] = useState('');
  const [status, setStatus] = useState('');

  const onButtonClick = async () => {
    const metadata = chainMetadata[originChain];
    if (!metadata) {
      setStatus(`⛔️ No metadata found for chain ${originChain}`);
      return;
    }

    // The default public Solana RPC aggressively rate limits, so we add another public node to the list
    chainMetadata.solanamainnet.rpcUrls.unshift({
      http: 'https://solana-rpc.publicnode.com'
    });

    const multiProvider = new MultiProtocolProvider(chainMetadata);
    const sealevelProvider = multiProvider.getSolanaWeb3Provider(originChain)
    setStatus(`⏳ Getting transaction...`);
    const tx = await sealevelProvider.getParsedTransaction(txId);
    console.log('tx', tx);
    if (!tx) {
      setStatus(`⛔️ Transaction not found`);
      return;
    }

    const finalInstruction = tx.transaction.message.instructions.length - 1;
    const transferRemoteInstruction: any = tx.transaction.message.instructions[finalInstruction];
    const transferRemoteData = transferRemoteInstruction.data;


    // let delivered = false;
    // try {
    //   switch (metadata.protocol) {
    //     case 'cosmos':
    //       const cosmosCore = core as CosmWasmCoreAdapter;
    //       delivered = await cosmosCore.delivered(strip0x(messageId));
    //       break;
    //     default:
    //       delivered = await core.waitForMessageProcessed(messageId, destinationChain, 0, 1);
    //       break;
    //   }
    // } catch (e) {
    //   setStatus(`⛔️ Error checking message delivery: ${e}`);
    //   return;
    // }

    // if (delivered) {
    //   setStatus(`Message successfully delivered: ✅`);
    // } else {
    //   setStatus(`Message not yet delivered: ❌`);
    // }
  };

  return (
    <div style={{
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    }}>
        <ChainDropdown
          chain={originChain}
          chains={chains}
          label="Destination Chain"
          onChange={setOriginChain}
        />
        <div>
          Origin tx id (signature):{"\t"}
          <input
            defaultValue={txId}
            onChange={(e) => setTxId(e.target.value)}
            placeholder="Abc..."
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
      >Get transfer recipient</button>
      <div style={{ margin: "10px" }}>
        {status}
      </div>
    </div>
  );
}
