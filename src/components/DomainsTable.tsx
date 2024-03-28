import { hyperlaneEnvironments, chainMetadata } from "@hyperlane-xyz/sdk";
import { capitalize } from "./AddressTable";

export type Environment = "testnet" | "mainnet";

type Props = {
  environment: Environment;
};

export default function DomainsTable({
  environment,
}: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Network</th>
          <th>Domain Identifier (uint32)</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(hyperlaneEnvironments[environment]).map((chain) => {
          const targetMetadata = chainMetadata[chain];
          return (
            <tr key={chain}>
              <td>{targetMetadata.displayName ?? capitalize(chain)}</td>
              <td>{targetMetadata.domainId}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
