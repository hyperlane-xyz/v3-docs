import { useAbacusWorksChainNames } from "../utils/registry";
import { ProtocolType } from "@hyperlane-xyz/utils";
import { chainMetadata } from "@hyperlane-xyz/registry";

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
      {label}:
      <div className="dropdown dropdown--hoverable margin-left--xs">
        <button className="button button--secondary navbar__link">
          {chain}
        </button>
        <ul className="dropdown__menu">
          {chains.map((chain) => (
            <li key={chain}>
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

export function TestnetChainDropdown(props: Omit<Props, "chains">) {
  const chains = useAbacusWorksChainNames(true).filter(
    (name) => chainMetadata[name].protocol === ProtocolType.Ethereum
  );
  return ChainDropdown({ chains, ...props });
}

export function MainnetChainDropdown(props: Omit<Props, "chains">) {
  const chains = useAbacusWorksChainNames(true).filter(
    (name) => chainMetadata[name].protocol === ProtocolType.Ethereum
  );
  return ChainDropdown({ chains, ...props });
}
