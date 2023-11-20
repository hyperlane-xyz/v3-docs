import InteractiveExample from "./InteractiveExample";
import testnetChainMetadata from "@site/static/chainmetadata/testnet.json";

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
      const originRpc = testnetChainMetadata[originChain].rpcUrls[0].http;
      const explorer = testnetChainMetadata[originChain]?.blockExplorers[0].url;
      const url = new URL(explorer);
      // F3 is the third function in the contract
      const contract = `${explorer}/address/${mailbox}#writeProxyContract#F3`;

      const destinationDomain = testnetChainMetadata[destinationChain].domainId;

      return (
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
                <code>{paddedRecipient}</code>, and message: <code>{body}</code>
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
