import { Noto_Sans_TC, Noto_Serif_TC } from "@next/font/google";
import type { AppProps } from "next/app";
import Script from "next/script";
import ReactGA from "react-ga";
import { ThemeProvider } from "styled-components";
import { gaTrackingId } from "../constants/config";
import { GlobalStyles } from "../styles/global-style";
import theme from "../styles/theme";

ReactGA.initialize(`${gaTrackingId}`);

const notosansTC = Noto_Sans_TC({
  weight: ["400", "500", "900"],
  style: ["normal"],
  subsets: ["latin"], //default
});

const notoSerifTC = Noto_Serif_TC({
  weight: ["400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"], //default
});

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
        //can use in single page
        :root {
          --notosansTC-font: ${notosansTC.style.fontFamily};
          --notoSerifTC-font: ${notoSerifTC.style.fontFamily};
        }
        html {
          font-family: ${notosansTC.style.fontFamily},
            ${notoSerifTC.style.fontFamily};
        }
      `}</style>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
