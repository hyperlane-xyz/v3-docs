import { useState } from "react";
// Difficulty polyfilling Buffer in the browser to be consumed by some Solana libs, so we do this instead
import * as buffer from "buffer";
window.Buffer = buffer.Buffer;

import { MultiProtocolProvider } from "@hyperlane-xyz/sdk";
import { chainMetadata } from "@hyperlane-xyz/registry";
import { addressToBytesEvm, bytesToAddressSol, ensure0x, hexOrBase58ToHex, ProtocolType, strip0x } from "@hyperlane-xyz/utils";

import ChainDropdown from './ChainDropdown';

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
    if (!tx) {
      setStatus(`⛔️ Transaction not found`);
      return;
    }

    const finalInstruction = tx.transaction.message.instructions.length - 1;
    const transferRemoteInstruction: any = tx.transaction.message.instructions[finalInstruction];
    const transferRemoteData = transferRemoteInstruction.data;

    const hex = strip0x(hexOrBase58ToHex(transferRemoteData));
    // The first 26 bytes are the instruction discriminator. After that, we have the recipient address.
    const recipientHex = ensure0x(hex.slice(26, 26 + 64));
    const recipientBytes = addressToBytesEvm(recipientHex);
    const recipientBase58 = bytesToAddressSol(recipientBytes);

    setStatus(`Transfer recipient (hex): ${recipientHex}\nTransfer recipient (base58): ${recipientBase58}`);
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
      <div style={{ margin: "10px", whiteSpace: 'pre-wrap' }}>
        {status}
      </div>
    </div>
  );
}
