import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Permissionless',
    Svg: require('@site/static/img/hyp_prms_landing.svg').default,
    description: (
      <>
        <b>Hyperlane was created for a modular world.</b> Anyone, anywhere can connect any chain and pass messages, move tokens, and perform queries.
      </>
    ),
  },
  {
    title: 'Many Ecosystems',
    Svg: require('@site/static/img/hyp_ecosystem_landing.svg').default,
    description: (
      <>
        Works seamlessly across many VMs and chains, including EVM, Solana, Cosmos, Move and more. 
      </>
    ),
  },
  {
    title: 'Modular Security',
    Svg: require('@site/static/img/hyp_security_landing.svg').default,
    description: (
      <>
        Customize your interchain security; from authority based security, to economic security and even ZK light clients. Leverage the context of users' actions in your protocol's security.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
