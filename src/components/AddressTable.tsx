import { chainAddresses, chainMetadata } from "@hyperlane-xyz/registry";
import { useAbacusWorksChainNames } from "../utils/registry";

export type Environment = "testnet" | "mainnet";

type Props<K extends string> = {
  contract: K;
  environment: Environment;
  withChainId: boolean;
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
  contract,
  environment,
  withChainId = false,
}: Props<K>) {
  const chainNames = useAbacusWorksChainNames(environment !== "mainnet");

  return (
    <table>
      <thead>
        <tr>
          <th>Chain</th>
          <th>Domain</th>
          {withChainId && <th>Chain ID</th>}
          <th>Address</th>
          <th>Explorer</th>
        </tr>
      </thead>
      <tbody>
        {chainNames.map((chain) => {
          const address = chainAddresses[chain]?.[contract];
          if (!address) return null;
          const targetMetadata = chainMetadata[chain];
          const explorer = targetMetadata.blockExplorers[0].url;
          const url = new URL(explorer);
          return (
            <tr key={chain}>
              <td>{targetMetadata.displayName ?? capitalize(chain)}</td>
              <td>{targetMetadata.domainId}</td>
              {withChainId && <td>{targetMetadata.chainId}</td>}
              <td>
                <code>{address}</code>
              </td>
              <td>
                <a
                  href={`${explorer}/address/${address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {url.hostname}
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
