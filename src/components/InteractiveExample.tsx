import { useState } from "react";
import { TestnetChainDropdown } from "./ChainDropdown";

import {
  chainAddresses,
  chainMetadata,
  CoreTestnets,
} from "@hyperlane-xyz/registry";
import CodeBlock from "@theme/CodeBlock";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";

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
  const [originChain, setOriginChain] = useState<string>(CoreTestnets[0]);
  const [destinationChain, setDestinationChain] = useState<string>(
    CoreTestnets[1]
  );
  const [body, setBody] = useState("Hello, world");

  const originDomain = chainMetadata[originChain].domainId;
  const destinationDomain = chainMetadata[destinationChain].domainId;

  const mailbox = chainAddresses[originChain]?.mailbox;
  const merkleTreeHook = chainAddresses[originChain]?.merkleTreeHook;
  const recipient = chainAddresses[originChain]?.testRecipient;

  const paddedRecipient = hexLeftPad(recipient);

  const value = "0.01";

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
