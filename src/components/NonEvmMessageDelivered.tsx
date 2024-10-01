import { useState } from "react";
import { ChainMetadata } from "@hyperlane-xyz/sdk";
import { chainMetadata } from "@hyperlane-xyz/registry";

import ChainDropdown from './ChainDropdown';

// TODO: these should be in the registry, but for now we'll hardcode them.
// Once they're in the registry, we can move away from this.
// const cosmosMailboxes = {
//   'neutron': 'neutron1sjzzd4gwkggy6hrrs8kxxatexzcuz3jecsxm3wqgregkulzj8r7qlnuef4',
//   'injective': 'inj1palm2wtp6urg0c6j4f2ukv5u5ahdcrqek0sapt',
// };

// const cosmosChains = Object.keys(mailboxes);

// Adding @hyperlane-xyz/utils as a dependency breaks things, so we copy these functions here.
export function strip0x(hexstr: string) {
  return hexstr.startsWith('0x') ? hexstr.slice(2) : hexstr;
}

export function ensure0x(hexstr: string) {
  return hexstr.startsWith('0x') ? hexstr : `0x${hexstr}`;
}

export default function NonEvmMessageDelivered({
  mailboxes,
  messageIsDelivered,
}: {
  mailboxes: Record<string, string>;
  messageIsDelivered: (metadata: ChainMetadata, mailbox: string, messageId: string) => Promise<boolean>;
}) {
  const chains = Object.keys(mailboxes);
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
    const mailbox = mailboxes[destinationChain];
    if (!mailbox) {
      setStatus(`⛔️ No known Mailbox found for chain ${destinationChain}`);
      return;
    }
    if (!metadata) {
      setStatus(`⛔️ No known Mailbox found for chain ${destinationChain}`);
      return;
    }

    const prefixedMessageId = ensure0x(messageId);

    setStatus(`⏳ Checking if message is delivered...`);
    
    let delivered = false;
    try {
      delivered = await messageIsDelivered(metadata, mailbox, prefixedMessageId);
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
