import { ChainMetadata } from "@hyperlane-xyz/sdk";
import NonEvmMessageDelivered, { strip0x } from "./NonEvmMessageDelivered";

// TODO: these should be in the registry, but for now we'll hardcode them.
// Once they're in the registry, we can move away from this.
const mailboxes = {
  'neutron': 'neutron1sjzzd4gwkggy6hrrs8kxxatexzcuz3jecsxm3wqgregkulzj8r7qlnuef4',
  'injective': 'inj1palm2wtp6urg0c6j4f2ukv5u5ahdcrqek0sapt',
};

async function messageIsDelivered(metadata: ChainMetadata, mailbox: string, messageId: string): Promise<boolean> {
  const restUrl = metadata.restUrls?.[0]?.http;
  if (!restUrl) {
    throw new Error('No available rest API URL set');
  }
  const payload = {
    mailbox: {
      message_delivered: {
        id: strip0x(messageId),
      }
    }
  };
  const base64Payload = window.btoa(JSON.stringify(payload));
  const url = `${restUrl}/cosmwasm/wasm/v1/contract/${mailbox}/smart/${base64Payload}`;
  console.log(`Fetching from ${url}`);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseJson = await response.json();
  return responseJson?.data?.delivered ?? false;
}

export default function CosmosMessageDelivered({
}) {
  return (
    <NonEvmMessageDelivered
      mailboxes={mailboxes}
      messageIsDelivered={messageIsDelivered}
    />
  )
}
