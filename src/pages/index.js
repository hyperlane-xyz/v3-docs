import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Discover Hyperlane v3
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Permissionless Interoperability for modular rollups | Celestia, OP Stack, Arbitrum Orbit">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <p>Pardon the appearance right now as we are migrating the docs over here. For the existing docs,
           visit <Link href="https://docs.hyperlane.xyz">docs.hyperlane.xyz</Link>.</p>

        <p>To learn more about V3 and the interfaces to leverage modular security and hooks, go to the <Link to="/docs/reference/messaging/messaging-interface">Reference.</Link></p>

      </main>
    </Layout>
  );
}
