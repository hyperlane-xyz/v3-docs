import TestnetAddresses from "@site/static/addresses/testnet.json";
import MainnetAddresses from "@site/static/addresses/mainnet.json";

type Props = {
  chains: string[];
  label: string;
  onChange: (chain: string) => void;
  chain?: string;
};

// see https://infima.dev/docs/components/dropdown
export default function ChainDropdown({
  chains,
  label,
  onChange,
  chain,
}: Props) {
  return (
    <div>
      {label}{":\t"}
      <div className="dropdown dropdown--hoverable magin--">
        <button className="button button--secondary navbar__link">
          {chain}
        </button>
        <ul className="dropdown__menu">
          {chains.map((chain) => (
            <li>
              <a
                className="dropdown__link"
                href={`#${label}=${chain}`}
                onClick={() => onChange(chain)}
              >
                {chain}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const TestnetChainDropdown = (props: Omit<Props, "chains">) =>
  ChainDropdown({ chains: Object.keys(TestnetAddresses), ...props });

export const MainnetChainDropdown = (props: Omit<Props, "chains">) =>
  ChainDropdown({ chains: Object.keys(MainnetAddresses), ...props });
