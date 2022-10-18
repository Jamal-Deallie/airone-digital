import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import '../styles/globals.css';
import '../styles/utilities.css';
import theme from '../styles/theme';
import React, { createContext, useEffect, useRef, useState } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
