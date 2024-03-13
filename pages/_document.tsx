import type { DocumentContext } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { staticFileDestination } from "../constants/config";

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
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="《鏡新聞》為您帶來 2024 年大甲媽祖遶境最新新聞"
          />
          <link
            rel="icon"
            type="image/x-icon"
            href={`${staticFileDestination}/icons/favicon.ico`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${staticFileDestination}/icons/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${staticFileDestination}/icons/favicon-16x16.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={`${staticFileDestination}/icons/apple-touch-icon.png`}
          />
          <link
            rel="mask-icon"
            href={`${staticFileDestination}/icons/safari-pinned-tab.svg`}
            color="#003366"
          />
          <meta property="og:title" content="2024 大甲媽祖遶境｜鏡新聞" />
          <meta
            property="og:description"
            content="《鏡新聞》為您帶來 2024 年大甲媽祖遶境最新新聞"
          />
          <meta
            property="og:image"
            content={`${staticFileDestination}/images/OG.png`}
          />
          <meta
            property="og:image:secure_url"
            content={`${staticFileDestination}/images/OG.png`}
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;600;900&display=swap"
            rel="stylesheet"
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
