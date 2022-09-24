import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import theme from '../styles/theme';
import { Layout } from '../components/Layout/Layout';
import  { AppProps } from 'next/app';


export default function MyApp({ Component, pageProps }: AppProps) {


  return (

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>

  );
}
