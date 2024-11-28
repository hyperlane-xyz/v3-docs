import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

const FeatureList = [
  {
    title: '易于使用',
    description: (
      <>
        Hyperlane 的设计注重开发者体验，让你能够快速开始构建跨链应用。
      </>
    ),
  },
  {
    title: '无需许可',
    description: (
      <>
        任何人都可以部署 Hyperlane 到任何区块链环境，无需审批，无需中介。
      </>
    ),
  },
  {
    title: '模块化安全',
    description: (
      <>
        通过跨链安全模块（ISM），根据你的应用需求自定义安全模型。
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
