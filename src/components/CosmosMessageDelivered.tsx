import { useState } from "react";
import ChainDropdown from './ChainDropdown';
import { chainMetadata } from "@hyperlane-xyz/registry";
import { ChainMetadata } from "@hyperlane-xyz/sdk";

type Props = {
  chains: string[];
  label: string;
  onChange: (chain: string) => void;
  chain?: string;
};

// TODO: these should be in the registry, but for now we'll hardcode them.
// Once they're in the registry, we can move away from this.
const mailboxes = {
  'neutron': 'neutron1sjzzd4gwkggy6hrrs8kxxatexzcuz3jecsxm3wqgregkulzj8r7qlnuef4',
  'injective': 'inj1palm2wtp6urg0c6j4f2ukv5u5ahdcrqek0sapt',
};

const cosmosChains = Object.keys(mailboxes);

export function strip0x(hexstr: string) {
  return hexstr.startsWith('0x') ? hexstr.slice(2) : hexstr;
}

export default function CosmosMessageDelivered({
}) {
  const [originChain, setOriginChain] = useState<string>(cosmosChains[0]);
  const [messageId, setMessageId] = useState('');
  const [status, setStatus] = useState('');

  const onButtonClick = async () => {
    const strippedMessageId = strip0x(messageId);
    if (strippedMessageId.length !== 64) {
      setStatus(`⛔️ Invalid message ID, must be 32 bytes (64 hex characters)`);
      return;
    }

    const metadata = chainMetadata[originChain];
    const mailbox = mailboxes[originChain];
    if (!mailbox) {
      setStatus(`⛔️ No known Mailbox found for chain ${originChain}`);
      return;
    }
    if (!metadata) {
      setStatus(`⛔️ No known Mailbox found for chain ${originChain}`);
      return;
    }
    const restUrl = metadata.restUrls?.[0]?.http;
    if (!restUrl) {
      setStatus(`⛔️ No available API set for chain ${originChain}`);
      return;
    }
    const payload = {
      mailbox: {
        message_delivered: {
          id: strippedMessageId,
        }
      }
    };
    const base64Payload = window.btoa(JSON.stringify(payload));
    const url = `${restUrl}/cosmwasm/wasm/v1/contract/${mailbox}/smart/${base64Payload}`;
    setStatus(`⏳ Checking if message is delivered...`);
    let responseJson;
    console.log(`Fetching from ${url}`);
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      responseJson = await response.json();
    } catch (e) {
      setStatus(`⛔️ Error checking message delivery: ${e}`);
      return;
    }
    const delivered = responseJson?.data?.delivered ?? false;
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
          chain={originChain}
          chains={cosmosChains}
          label="Origin Chain"
          onChange={setOriginChain}
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
