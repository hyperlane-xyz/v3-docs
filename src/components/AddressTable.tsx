import testnetChainMetadata from "@site/static/chainmetadata/testnet.json";
import mainnetChainMetadata from "@site/static/chainmetadata/mainnet.json";
import TestRecipientAddresses from "@site/static/addresses/testrecipients.json";
import TestnetAddresses from "@site/static/addresses/testnet.json";
import MainnetAddresses from "@site/static/addresses/mainnet.json";

type Environment = 'testnet' | 'mainnet';

type Props<K extends string> = {
  addressesMap: Record<string, Record<K, string>>;
  key: K;
  environment: Environment;
};

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function AddressTable<K extends string>({
  addressesMap,
  key,
  environment
}: Props<K>) {
  return (
    <table>
      <tr>
        <th>Chain</th>
        <th>Domain</th>
        <th>Address</th>
        <th>Explorer</th>
      </tr>
      {Object.entries(addressesMap).map(([chain, addresses]) => {
        const address = addresses[key];
        const targetMetadata = environment === 'testnet' ? testnetChainMetadata[chain] : mainnetChainMetadata[chain];
        const explorer = targetMetadata.blockExplorers[0].url;
        const url = new URL(explorer);
        return (
          <tr>
            <td>{capitalize(chain)}</td>
            <td>{targetMetadata.domainId}</td>
            <td><code>{address}</code></td>
            <td>
              <a
                href={`${explorer}/address/${address}`}
                target="_blank"
                rel="noopener noreferrer"
              >{url.hostname}</a>
            </td>
          </tr>
        );
      })}
    </table>
  );
}

export const TestRecipientAddressesTable = () => AddressTable({
  addressesMap: TestRecipientAddresses,
  key: "TestRecipient",
  environment: 'testnet'
});

export const TestnetMailboxAddressesTable = () => AddressTable({
  addressesMap: TestnetAddresses,
  key: 'mailbox',
  environment: 'testnet'
});
