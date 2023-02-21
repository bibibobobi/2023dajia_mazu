import type { DocumentContext } from 'next/document';
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='description'
            content='《鏡新聞》為您帶來 2023 年大甲媽祖遶境最新新聞'
          />
          <link rel='icon' type='image/x-icon' href={'/icons/favicon.ico'} />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href={`/icons/favicon-32x32.png`}
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href={'/icons/favicon-16x16.png'}
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href={'/icons/apple-touch-icon.png'}
          />
          <link
            rel='mask-icon'
            href={'/icons/safari-pinned-tab.svg'}
            color='#003366'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
