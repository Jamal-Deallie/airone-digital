import { ReactElement, ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import theme from '../styles/theme';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let colorChangers = gsap.utils.toArray(
      '.color_changer'
    ) as HTMLCollectionOf<HTMLElement>[];

    function animateColor(color: string): void {
      const tl = gsap.timeline({});
      tl.to('.color_changer-text', {
        color: '#1A1B1D',
        ease: 'power2.inOut',
      }).to('.color_changer', {
        backgroundColor: color,
        ease: 'linear',
      });
    }

    colorChangers.forEach(function (colorChanger, i) {
      if (colorChanger instanceof HTMLElement) {
        let color = colorChanger.dataset.color;
        console.log(color);
        let prevSection = colorChangers[i - 1];
        let prevColor =
          prevSection instanceof HTMLElement
            ? prevSection?.dataset?.color
            : '#FBEBDC';

        ScrollTrigger.create({
          trigger: colorChanger,
          start: 'top-=30 center',
          // end: 'top+=10 center',
          markers: true,
          onEnter: () => {
            animateColor(color as string);
          },
          onEnterBack: () => {
            animateColor(prevColor as string);
          },
        });
      }
    });
  });
  return getLayout(
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
