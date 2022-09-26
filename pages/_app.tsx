import { useState, useLayoutEffect, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import theme from '../styles/theme';
import { Layout } from '../components/Layout/Layout';
import { AppProps } from 'next/app';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { SmootherContext } from '../contexts/SmoothScrollProvider';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

export default function MyApp({ Component, pageProps }: AppProps) {
  let [smoother, setSmoother] = useState({});
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollTrigger.defaults({
      immediateRender: false,
      invalidateOnRefresh: true,
    });
    ScrollTrigger.config({
      // if true, vertical resizes (of 25% of the viewport height) on touch-only devices won't trigger a ScrollTrigger.refresh(true), avoiding the jumps that can happen when the start/end values are recalculated.
      ignoreMobileResize: true,
    });

    const smoothScroll = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1,
      normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
      effects: true,
    });

    setSmoother(smoothScroll);
    return () => {
      smoothScroll.kill();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Navbar />
        <SmootherContext.Provider value={smoother}>
          <div id='smooth-wrapper'>
            <div id='smooth-content'>
              <Component {...pageProps} />
              <Footer />
            </div>
          </div>
        </SmootherContext.Provider>
      </div>
    </ThemeProvider>
  );
}
