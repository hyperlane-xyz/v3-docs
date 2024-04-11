import {
  CoreMainnets,
  CoreTestnets,
  chainMetadata,
} from "@hyperlane-xyz/registry";
import { capitalize } from "./AddressTable";

export type Environment = "testnet" | "mainnet";

type Props = {
  environment: Environment;
};

export default function DomainsTable({ environment }: Props) {
  const chainNames = environment === "mainnet" ? CoreMainnets : CoreTestnets;
  return (
    <table>
      <thead>
        <tr>
          <th>Network</th>
          <th>Domain Identifier (uint32)</th>
        </tr>
      </thead>
      <tbody>
        {chainNames.map((chain) => {
          const targetMetadata = chainMetadata[chain];
          if (!targetMetadata) return null;
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
