import { capitalize } from "./AddressTable";
import TestnetAddresses from "@site/static/addresses/testnet.json";
import MainnetAddresses from "@site/static/addresses/mainnet.json";

type Props = {
  chains: string[];
  label: string;
  onChange: (chain: string) => void;
  defaultChain?: string;
};

export default function ChainDropdown({ chains, label, onChange, defaultChain }: Props) {
  const id = `${label}-chain`;
  return (
    <div>
      <label htmlFor={id}>
        Choose a{label.startsWith("o") ? "n" : ""} {label} chain:{" "}
      </label>
      <select name="chain" id={id} onChange={(e) => onChange(e.target.value)} defaultValue={defaultChain}>
        {chains.map((chain) => (
          <option value={chain}>{chain}</option>
        ))}
      </select>
    </div>
  );
}

export const TestnetChainDropdown = (props: Omit<Props, "chains">) =>
  ChainDropdown({ chains: Object.keys(TestnetAddresses), ...props });

export const MainnetChainDropdown = (props: Omit<Props, "chains">) =>
  ChainDropdown({ chains: Object.keys(MainnetAddresses), ...props });
