import type { AppProps } from "next/app";
import Script from "next/script";
import ReactGA from "react-ga";
import { ThemeProvider } from "styled-components";
import { gaTrackingId } from "../constants/config";
import { GlobalStyles } from "../styles/global-style";
import theme from "../styles/theme";

ReactGA.initialize(`${gaTrackingId}`);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
      />
      <Script id="ga-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaTrackingId}');
        `}
      </Script>

      <style jsx global>{`
        html {
          font-family: "PingFang TC", "Noto Serif TC";
        }
      `}</style>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
