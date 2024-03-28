import InteractiveExample from "./InteractiveExample";

import { chainMetadata } from "@hyperlane-xyz/sdk";

import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function MessageQuickstart() {
  return InteractiveExample({
    exampleCode: ({
      mailbox,
      originChain,
      destinationChain,
      paddedRecipient,
      body,
      value,
    }) => {
      const originRpc = chainMetadata[originChain].rpcUrls[0].http;
      const explorer = chainMetadata[originChain]?.blockExplorers[0].url;
      const url = new URL(explorer);
      // F3 is the third function in the contract
      const contract = `${explorer}/address/${mailbox}#writeProxyContract#F3`;

      const destinationDomain = chainMetadata[destinationChain].domainId;

      return (
        <Tabs>
          <TabItem value="cli" label="Hyperlane CLI" default>
            Install the CLI:
            <CodeBlock language="shell">
              npm install -g @hyperlane-xyz/cli
            </CodeBlock>
            Send the message:
            <CodeBlock language="shell">
              hyperlane send message --origin {originChain} --destination {destinationChain}
            </CodeBlock>
          </TabItem>
          <TabItem value="cast" label="Cast">
            Install <code>cast</code>:
            <CodeBlock language="shell">
              curl -L https://foundry.paradigm.xyz | bash
            </CodeBlock>
            Send the message:
            <CodeBlock language="shell">
              cast send {mailbox} "dispatch(uint32,bytes32,bytes)"{" "}
              {destinationDomain} {paddedRecipient} $(cast --from-utf8 "{body}"){" "}
              --rpc-url {originRpc} --value {value}ether
            </CodeBlock>
          </TabItem>
          <TabItem value="explorer" label="Explorer">
            <ol>
              <li>
                Navigate to the{" "}
                <a href={contract} target="_blank">
                  {url.hostname} <code>dispatch</code> interface
                </a>
              </li>
              <li>
                Click on the <code>Connect to Web3</code> button to connect your
                Wallet. Make sure you are on <code>{originChain}</code>.
              </li>
              <li>
                Fill in value: <code>{value}</code>, destination:{" "}
                <code>{destinationDomain}</code>, recipient:{" "}
                <code>{paddedRecipient}</code>, and message the hex representation of "{body}". For example if you have <code>cast</code> installed, <code>cast --from-utf8 "Hello, world"</code> returns <code>0x48656c6c6f2c20776f726c64</code>.
              </li>
              <li>
                Click the <code>Write</code> button to submit the transaction!
              </li>
            </ol>
          </TabItem>
        </Tabs>
      );
    },
  });
}
