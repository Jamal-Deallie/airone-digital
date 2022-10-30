import { AppProps } from 'next/app';
import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import Layout from '@/components/Layout/Layout';
import '../styles/globals.css';
import '../styles/utilities.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
