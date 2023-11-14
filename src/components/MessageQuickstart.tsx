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
  const [originChain, setOriginChain] = useState("$ORIGIN");
  const [destinationChain, setDestinationChain] = useState("$DESTINATION");
  const [body, setBody] = useState("Hello, world");

  const mailbox = TestnetAddresses[originChain]?.mailbox ?? "$MAILBOX";
  const rpc = testnetChainMetadata[originChain]?.rpcUrls[0].http ?? "$RPC_URL";
  const destinationDomain =
    testnetChainMetadata[destinationChain]?.domainId ?? "$DESTINATION_DOMAIN";
  const recipient = hexLeftPad(TestRecipientAddresses[destinationChain]?.TestRecipient ?? "$RECIPIENT");

  const explorer =
    testnetChainMetadata[originChain]?.blockExplorers[0].url ??
    "https://goerli.etherscan.io/";

  const url = new URL(explorer);
  const contract = `${explorer}/address/${mailbox}#writeContract`;

  return (
    <div>
      <form>
        <ul>
          <li>
            <TestnetChainDropdown label="origin" onChange={setOriginChain} />
          </li>
          <li>
            <TestnetChainDropdown
              label="destination"
              onChange={setDestinationChain}
            />
          </li>
          <li>
            <label>Enter your message: </label>
            <input
              name="message"
              defaultValue={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </li>
        </ul>
      </form>
      <Tabs>
        <TabItem value="cast" label="Cast" default>
          <CodeBlock language="shell">
            cast send {mailbox} "dispatch(uint32,bytes32,bytes)"{" \\\n"}
            {"\t"}
            {destinationDomain}
            {" \\\n"}
            {"\t"}
            {recipient}
            {" \\\n"}
            {"\t"}$(cast --from-utf8 "{body}"){" \\\n"}
            {"\t"}--rpc-url {rpc}
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
              <code>{recipient}</code>, and message: <code>{body}</code>
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
