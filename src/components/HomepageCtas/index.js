import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import links from "@site/src/links/links";

function Home() {
  return (
    <main className={styles.main}>
      <br />
      <section className={styles.features}>
        <div className="container">
          <h1
            className="landing-tagline"
            style={{
              fontSize: "xx-large",
              paddingTop: "15px",
            }}
          >
            Hyperlane Docs
          </h1>
          <p
            style={{
              color: "gray",
              fontSize: "1rem",
              marginBottom: "40px",
            }}
          >
            Explore our tools, guides and references for building cross-chain
            applications apps.
          </p>
          <div className={styles.cardContainer}>
            <Link to={links.intro} className={styles.card}>
              <h3>
                <div
                  className={styles.icon}
                  style={{ backgroundImage: 'url("icons/icon-5.svg")' }}
                />
                Intro to Hyperlane
              </h3>
              <p>
                Overview of the Hyperlane protocol, Permissionless
                Interoperability and use-cases
              </p>
            </Link>
            <Link to={links.deployHyperlane} className={styles.card}>
              <h3>
                <div
                  className={styles.icon}
                  style={{ backgroundImage: 'url("icons/icon-1.svg")' }}
                />
                Deploy to a New Chain
              </h3>
              <p>Quickly deploy Hyperlane on a new chain</p>
            </Link>
            <Link to={links.deployWarpRoute} className={styles.card}>
              <h3>
                <div
                  className={styles.icon}
                  style={{ backgroundImage: 'url("icons/icon-2.svg")' }}
                />
                Bridge Tokens with Warp Routes
              </h3>
              <p>Learn how to bridge assets using Warp Routes</p>
            </Link>
            <Link to={links.runValidators} className={styles.card}>
              <h3>
                <div
                  className={styles.icon}
                  style={{ backgroundImage: 'url("icons/icon-3.svg")' }}
                />
                Run a Validator
              </h3>
              <p>Step-by-step instructions to run a Hyperlane Validator</p>
            </Link>
            <Link to={links.protocolOverview} className={styles.card}>
              <h3>
                <div
                  className={styles.icon}
                  style={{ backgroundImage: 'url("icons/icon-4.svg")' }}
                />
                Core Concepts
              </h3>
              <p>Learn about the Hyperlane protocol and core components</p>
            </Link>
            <Link to={links.contractAddresses} className={styles.card}>
              <h3>
                <div
                  className={styles.icon}
                  style={{ backgroundImage: 'url("icons/icon-6.svg")' }}
                />
                Where is Hyperlane?
              </h3>
              <p>Learn about the current deployments</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
