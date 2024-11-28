import React from 'react';
import Translate from '@docusaurus/Translate';
import {useDoc} from '@docusaurus/theme-common/internal';
import Admonition from '@theme/Admonition';

export default function LanguageFooter() {
  const {metadata} = useDoc();
  const {
    locale,
    locales,
    frontMatter: {
      outdated_translations = false,
    },
  } = metadata;

  // Only show on Chinese pages
  if (locale !== 'zh-Hans') {
    return null;
  }

  return (
    <>
      <div className="language-footer">
        <Admonition type="info">
          <p>
            <Translate
              id="language.footer.message"
              description="The message shown on Chinese documentation pages">
              如果发现翻译问题或想参与改进翻译，请访问我们的{' '}
              <a href="https://github.com/hyperlane-xyz/hyperlane-monorepo" target="_blank">
                GitHub 仓库
              </a>
              。
            </Translate>
          </p>
        </Admonition>
      </div>
    </>
  );
}
