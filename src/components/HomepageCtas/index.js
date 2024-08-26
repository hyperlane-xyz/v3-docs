import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import links from "@site/src/links/links";

const CtaList = [
  {
    title: "Deploy to a New Chain",
    link: links.deployHyperlane,
  },
  {
    title: "Bridge Tokens with Warp Routes",
    link: links.deployWarpRoute,
  },
  {
    title: "Run a Validator",
    link: links.runValidators,
  },
  {
    title: "Learn Concepts",
    link: links.protocolOverview,
  },
  {
    title: "Where is Hyperlane?",
    link: links.contractAddresses,
  },
];

function Cta({ title, link }) {
  return (
    <div class="col col--4 padding-vert--md">
      <Link to={link}>
        <button className="button button--lg button--secondary button--block">
          {title}
        </button>
      </Link>
    </div>
  );
}

export default function HomepageCtas() {
  return (
    <section className={styles.features}>
      <div className="container">
        {splitArray(CtaList, 3).map((row, idx) => (
          <div className="row">
            {row.map((props, idx) => (
              <Cta key={idx} {...props} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function splitArray(array, n) {
  let [...arr] = array;
  var res = [];
  while (arr.length) {
    res.push(arr.splice(0, n));
  }
  return res;
}
