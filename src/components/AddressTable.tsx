import testnetChainMetadata from "@site/static/chainmetadata/testnet.json";
import mainnetChainMetadata from "@site/static/chainmetadata/mainnet.json";
import TestRecipientAddresses from "@site/static/addresses/testrecipients.json";
import TestnetAddresses from "@site/static/addresses/testnet.json";
import MainnetAddresses from "@site/static/addresses/mainnet.json";

export type Environment = "testnet" | "mainnet";

type Props<K extends string> = {
  addressesMap: Record<string, Record<K, string>>;
  contract: K;
  environment: Environment;
};

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function camelToTitle(camelCaseString: string) {
  // Add a space before each uppercase letter and trim the resulting string
  const spacedString = camelCaseString.replace(/([A-Z])/g, ' $1').trim();

  return spacedString.split(' ').map((word: string) => capitalize(word)).join(' ');
}

export default function AddressTable<K extends string>({
  addressesMap,
  contract,
  environment,
}: Props<K>) {
  return (
    <table>
      <thead>
        <tr>
          <th>Chain</th>
          <th>Domain</th>
          <th>Address</th>
          <th>Explorer</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(addressesMap).map(([chain, addresses]) => {
          const address = addresses[contract];
          const targetMetadata =
            environment === "testnet"
              ? testnetChainMetadata[chain]
              : mainnetChainMetadata[chain];
          const explorer = targetMetadata.blockExplorers[0].url;
          const url = new URL(explorer);
          return (
            <tr key={chain}>
              <td>{capitalize(chain)}</td>
              <td>{targetMetadata.domainId}</td>
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

export const CoreAddressesTable = ({ contract, environment }) =>
  AddressTable({
    addressesMap:
      environment === "testnet" ? TestnetAddresses : MainnetAddresses,
    contract,
    environment,
  });

export const TestRecipientAddressesTable = () =>
  AddressTable({
    addressesMap: TestRecipientAddresses,
    contract: "TestRecipient",
    environment: "testnet",
  });
