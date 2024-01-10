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

type Params = {
  mailbox: string;
  merkleTreeHook: string;
  originChain: string;
  originDomain: number;
  destinationChain: string;
  destinationDomain: number;
  recipient: string;
  paddedRecipient: string;
  body: string;
  value: string;
};

type Props = {
  exampleCode: (params: Params) => JSX.Element;
};

export default function InteractiveExample(props: Props) {
  const testnetChains = Object.keys(testnetChainMetadata);
  const [originChain, setOriginChain] = useState(testnetChains[0]);
  const [destinationChain, setDestinationChain] = useState(testnetChains[1]);
  const [body, setBody] = useState("Hello, world");

  const originDomain = testnetChainMetadata[originChain].domainId;
  const destinationDomain = testnetChainMetadata[destinationChain].domainId;

  const mailbox = TestnetAddresses[originChain]?.mailbox;
  const merkleTreeHook = TestnetAddresses[originChain]?.merkleTreeHook;
  const recipient = TestRecipientAddresses[destinationChain]?.TestRecipient;

  const paddedRecipient = hexLeftPad(recipient);

  const value = "0.01 ether";

  return (
    <div>
      <div className="container row">
        <div className="margin-horiz--sm">
          <TestnetChainDropdown
            label="origin"
            chain={originChain}
            onChange={setOriginChain}
          />
        </div>
        <div className="margin-horiz--sm">
          <TestnetChainDropdown
            label="destination"
            chain={destinationChain}
            onChange={setDestinationChain}
          />
        </div>
        <div className="margin-horiz--sm">
          body:{"\t"}
          <input
            defaultValue={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
      </div>
      {props.exampleCode({
        mailbox,
        merkleTreeHook,
        originChain,
        originDomain,
        destinationChain,
        destinationDomain,
        recipient,
        paddedRecipient,
        body,
        value,
      })}
    </div>
  );
}

export const MultiLanguageExample = (props: {
  solidity: (params: Params) => JSX.Element;
}) =>
  InteractiveExample({
    exampleCode: (params) => {
      return (
        <Tabs groupId="lang">
          <TabItem value="sol" label="Solidity">
            <CodeBlock language="solidity">{props.solidity(params)}</CodeBlock>
          </TabItem>
          <TabItem value="cw" label="CosmWasm">
            🚧 Coming soon! 🚧
          </TabItem>
          <TabItem value="sl" label="Sealevel">
            🚧 Coming soon! 🚧
          </TabItem>
        </Tabs>
      );
    },
  });
