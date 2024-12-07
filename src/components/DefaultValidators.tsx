import { defaultMultisigConfigs } from '@hyperlane-xyz/sdk';
import { chainMetadata } from '@hyperlane-xyz/registry';
import { useAbacusWorksChainNames } from '../utils/registry';
import { camelToTitle, Environment } from './AddressTable';

type DefaultValidatorsProps = {
  environment: Environment;
};

export default function DefaultValidators({ environment }: DefaultValidatorsProps) {
  const chainNames = useAbacusWorksChainNames(environment !== "mainnet");

  return (
    <>
      {chainNames.map((chain) => {
        const config = defaultMultisigConfigs[chain];
        if (!config || config.validators.length <= 1) return null;

        const { name, displayName, domainId } = chainMetadata[chain];

        return (
          <div id={chain} key={chain}>
            <h2 className="mb-4">
              <a
                href={`#${chain}`}
                style={{ color: 'inherit' }}
              >
                {displayName ?? camelToTitle(name)} ({domainId})
              </a>
            </h2>

            <h4>
              Threshold: {config.threshold} of {config.validators.length}
            </h4>

            <table className="w-full border-collapse mb-4">
              <thead>
                <tr>
                  <th className="text-left px-4 py-2">Operator</th>
                  <th className="text-left px-4 py-2">Address</th>
                </tr>
              </thead>
              <tbody>
                {config.validators.map(({ address, alias }) => (
                  <tr key={address}>
                    <td className="border px-4 py-2">{alias}</td>
                    <td className="border px-4 py-2"><code>{address}</code></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
}
