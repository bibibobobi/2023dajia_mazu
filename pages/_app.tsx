import { GlobalStyles } from '../styles/global-style';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import theme from '../styles/theme';
import Script from 'next/script';
import { Noto_Sans_TC } from '@next/font/google';
import { gaTrackingId } from '../constants/config';
import ReactGA from 'react-ga';

ReactGA.initialize(`${gaTrackingId}`);

const notosansTC = Noto_Sans_TC({
  weight: ['400', '500', '900'],
  style: ['normal'],
  subsets: ['latin'], //default
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
      />
      <Script id='ga-script'>
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
        }
        html {
          font-family: PingFang TC, ${notosansTC.style.fontFamily};
        }
      `}</style>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
