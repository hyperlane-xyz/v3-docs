import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import links from "@site/src/links/links";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.contentWrapper}>
          <h1>Hyperlane Documentation</h1>
          <p>
            Explore our tools, guides and references for building cross-chain
            applications.
          </p>
          <div className={styles.heroCta}>
            <Link
              className={`${styles.button} ${styles.primaryButton}`}
              to={links.intro}
            >
              What is Hyperlane?
            </Link>
            <Link
              className={`${styles.button} ${styles.secondaryButton}`}
              to={links.hyperlaneDeployments}
            >
              Where is Hyperlane deployed?
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className={styles.quickStartBg}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.sectionTitle}>Quick Start</h2>
          <div className={`${styles.cardGrid} ${styles.cardGridTwo}`}>
            <Link to={links.deployHyperlane} className={styles.cardLink}>
              <h3>
                <div
                  className={styles.icon}
                  style={{ backgroundImage: 'url("icons/icon-1.svg")' }}
                />
                Deploy to a New Chain
              </h3>
              <p>Quickly deploy Hyperlane to a new chain</p>
            </Link>
            <Link to={links.deployWarpRoute} className={styles.cardLink}>
              <h3>
                <div
                  className={styles.icon}
                  style={{ backgroundImage: 'url("icons/icon-2.svg")' }}
                />
                Bridge Tokens with Warp Routes
              </h3>
              <p>Transfer assets across chains</p>
            </Link>
            <Link to={links.runValidators} className={styles.cardLink}>
              <h3>
                <div
                  className={styles.icon}
                  style={{ backgroundImage: 'url("icons/icon-3.svg")' }}
                />
                Run a Validator
              </h3>
              <p>Step-by-step guide to running a Hyperlane Validator</p>
            </Link>
            <Link to={links.protocolOverview} className={styles.cardLink}>
              <h3>
                <div
                  className={styles.icon}
                  style={{ backgroundImage: 'url("icons/icon-4.svg")' }}
                />
                Learn about the Hyperlane Protocol
              </h3>
              <p>Explore the core components & architecture</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={styles.useCases}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.sectionTitle}>What Can You Build?</h2>
          <div className={`${styles.cardGrid} ${styles.cardGridThree}`}>
            <Link to={links.deployWarpRoute} className={styles.cardLink}>
              <h3>Bridge Tokens</h3>
              <p>Use Hyperlane Warp Routes to bridge assets between chains.</p>
            </Link>
            <Link to={links.generalMessagePassing} className={styles.cardLink}>
              <h3>General Message Passing</h3>
              <p>Send arbitrary data and function calls across chains.</p>
            </Link>
            <Link to={links.interchainAccounts} className={styles.cardLink}>
              <h3>Interchain Accounts</h3>
              <p>
                Enable a single account on the origin chain to make
                authenticated calls to contracts on a remote chain.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
