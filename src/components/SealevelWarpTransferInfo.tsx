// Difficulty polyfilling Buffer in the browser to be consumed by some Solana libs, so we do this instead
import * as buffer from "buffer";
window.Buffer = buffer.Buffer;
import { useState } from "react";

import { chainMetadata } from "@hyperlane-xyz/registry";
import { addressToBytesEvm, bytesToAddressSol, ensure0x, hexOrBase58ToHex, strip0x } from "@hyperlane-xyz/utils";

import ChainDropdown from './ChainDropdown';
import { useMultiProtocolProvider } from "../utils/registry";

export default function NonEvmMessageDelivered({
  chains,
}: {
  chains: string[];
}) {
  const [originChain, setOriginChain] = useState<string>(chains[0]);
  const [txId, setTxId] = useState('');
  const [status, setStatus] = useState('');
  const multiProvider = useMultiProtocolProvider();

  const setTransferRecipient = async () => {
    const metadata = chainMetadata[originChain];
    if (!metadata) {
      setStatus(`⛔️ No metadata found for chain ${originChain}`);
      return;
    }

    const sealevelProvider = multiProvider.getSolanaWeb3Provider(originChain)
    setStatus(`⏳ Getting transaction...`);
    let tx = await sealevelProvider.getParsedTransaction(txId);
    if (!tx) {
      setStatus(`⛔️ Transaction not found`);
      return;
    }

    const finalInstruction = tx.transaction.message.instructions.length - 1;
    // Types don't all include `data`, but in practice we have it.
    const transferRemoteInstruction: any = tx.transaction.message.instructions[finalInstruction];
    const transferRemoteData = transferRemoteInstruction.data;
    if (!transferRemoteData) {
      setStatus(`⛔️ No data found in instruction`);
      return;
    }

    const hex = strip0x(hexOrBase58ToHex(transferRemoteData));
    // The first 13 bytes (2 chars per byte) are the instruction discriminator. After that, we have the 32 byte recipient address.
    const recipientHex = ensure0x(hex.slice(26, 26 + 64));
    const recipientBytes = addressToBytesEvm(recipientHex);
    const recipientBase58 = bytesToAddressSol(recipientBytes);

    setStatus(`🕵️‍♂️ Transfer recipient (hex): ${recipientHex}\n🕵️‍♂️ Transfer recipient (base58): ${recipientBase58}`);
  };

  const onButtonClick = async () => {
    try {
      await setTransferRecipient();
    } catch (e) {
      setStatus(`⛔️ Error: ${e.message}`);
    }
  }

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
