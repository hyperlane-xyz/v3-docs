import { chainAddresses, chainMetadata } from "@hyperlane-xyz/registry";
import { useAbacusWorksChainNames } from "../utils/registry";
import { capitalize, Environment } from "./AddressTable";

type Props = {
  environment: Environment;
};

export default function ReorgPeriodTable({ environment }: Props) {
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
          const mailbox = chainAddresses[chain]?.mailbox;
          if (!mailbox) return null;
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
