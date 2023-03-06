import { GlobalStyles } from '../styles/global-style';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import theme from '../styles/theme';
import { Noto_Sans_TC } from '@next/font/google';

const notosansTC = Noto_Sans_TC({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'], //default
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
