import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageCtas from "@site/src/components/HomepageCtas";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Permissionless Interoperability for modular rollups | Celestia, OP Stack, Arbitrum Orbit"
    >
      <main>
        <HomepageCtas />
      </main>
    </Layout>
  );
}
