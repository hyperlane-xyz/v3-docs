import { chainAddresses, chainMetadata } from "@hyperlane-xyz/registry";
import { useAbacusWorksChainNames } from "../utils/registry";

export type Environment = "testnet" | "mainnet";

type Props<K extends string> = {
  contract: K;
  environment: Environment;
};

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function camelToTitle(camelCaseString: string) {
  // Add a space before each uppercase letter and trim the resulting string
  const spacedString = camelCaseString.replace(/([A-Z])/g, " $1").trim();

  return spacedString
    .split(" ")
    .map((word: string) => capitalize(word))
    .join(" ");
}

export default function AddressTable<K extends string>({
  environment,
}: Props<K>) {
  const chainNames = useAbacusWorksChainNames(environment !== "mainnet");

  return (
    <table>
      <thead>
        <tr>
          <th>Chain</th>
          <th>Domain</th>
          <th>Reorg Period (blocks)</th>
          <th>Estimated Block Time (seconds)</th>
        </tr>
      </thead>
      <tbody>
        {chainNames.map((chain) => {
          const targetMetadata = chainMetadata[chain];
          return (
            <tr key={chain}>
              <td>{targetMetadata.displayName ?? capitalize(chain)}</td>
              <td>{targetMetadata.domainId}</td>
              <td>{targetMetadata.blocks.reorgPeriod}</td>
              <td>{targetMetadata.blocks.estimateBlockTime}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
