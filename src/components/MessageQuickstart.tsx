import { useState } from "react";
import { TestnetChainDropdown } from "./ChainDropdown";
import TestnetAddresses from "@site/static/addresses/testnet.json";
import TestRecipientAddresses from "@site/static/addresses/testrecipients.json";
import testnetChainMetadata from "@site/static/chainmetadata/testnet.json";

import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

function hexLeftPad(s: string, bytes = 32) {
  if (s.startsWith("0x")) {
    s = s.slice(2);
  }
  return "0x" + s.padStart(bytes * 2, "0");
}

export default function MessageQuickstart() {
  const testnetChains = Object.keys(testnetChainMetadata);
  const [originChain, setOriginChain] = useState(testnetChains[0]);
  const [destinationChain, setDestinationChain] = useState(testnetChains[1]);
  const [body, setBody] = useState("Hello, world");

  const mailbox = TestnetAddresses[originChain]?.mailbox;
  const originRpc = testnetChainMetadata[originChain].rpcUrls[0].http;
  const destinationDomain = testnetChainMetadata[destinationChain].domainId;
  const recipient = TestRecipientAddresses[destinationChain]?.TestRecipient;

  const paddedRecipient = hexLeftPad(recipient);

  const explorer = testnetChainMetadata[originChain]?.blockExplorers[0].url;

  const url = new URL(explorer);
  const contract = `${explorer}/address/${mailbox}#writeContract`;

  const value = "0.01 ether";

  // see https://infima.dev/docs/layout/grid
  return (
    <div>
      <div className="container row">
        <div className="col">
        <TestnetChainDropdown
          label="origin"
          chain={originChain}
          onChange={setOriginChain}
        />
        </div>
        <div className="col">
        <TestnetChainDropdown
          label="destination"
          chain={destinationChain}
          onChange={setDestinationChain}
        />
        </div>
        <div className="col">
        body:{"\t"}
        <input
          className=""
          defaultValue={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </div>
      </div>
      <br />
      <Tabs>
        <TabItem value="cast" label="Cast" default>
          <CodeBlock language="shell">
            cast send {mailbox} "dispatch(uint32,bytes32,bytes)"{" "}
            {destinationDomain} {paddedRecipient} $(cast --from-utf8 "{body}"){" "}
            --rpc-url {originRpc} --value {value}
          </CodeBlock>
        </TabItem>
        <TabItem value="explorer" label="Explorer">
          <ol>
            <li>
              Navigate to the{" "}
              <a href={contract}>
                {url.hostname} <code>dispatch</code> interface
              </a>
            </li>
            <li>
              Click on the <code>Connect to Web3</code> button to connect your
              Wallet. Make sure you are on <code>{originChain}</code>.
            </li>
            <li>
              Fill in destination: <code>{destinationDomain}</code>, recipient:{" "}
              <code>{recipient}</code>, message: <code>{body}</code>, and value:{" "}
              <code>{value}</code>
            </li>
            <li>
              Click the <code>Write</code> button to submit the transaction!
            </li>
          </ol>
        </TabItem>
      </Tabs>
    </div>
  );
}
