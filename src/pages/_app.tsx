/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import AppProvider from '@/hooks';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from '@/redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const url = `https://dreamwall.com/${router.route}`;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
        </Head>
        <GlobalStyle />
        <AppProvider>
          <Component {...pageProps} canonical={url} key={url} />
        </AppProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
