import { ReactNode, useRef, useLayoutEffect, useEffect } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import { ScrollSmoother } from 'gsap/dist//ScrollSmoother';
import styled from 'styled-components';

type PropsSplitTextLine = {
  children?: ReactNode;
  duration?: number;
  delay?: number;
  ease?: string;
  y?: number;
  cn?: string;
  stagger?: number;
  target?: string;
};

function SplitTextLine({
  children,
  stagger,
  duration,
  delay,
  y,
  ease,
  cn,
}: PropsSplitTextLine) {
  const el = useRef<HTMLDivElement>(null);
  const tl = useRef(null);
  const text = useRef(null);

  useIsomorphicLayoutEffect(
    () => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
      let split: SplitText;

      let timeout: string | number | NodeJS.Timeout | undefined; // holder for timeout id
      let delay = 250; // delay after event is "complete" to run callback

      if (split) {
        split.revert();
      }
      split = new SplitText(cn, {
        charsClass: 'chars',
        linesClass: 'lines',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          start: 'top center',
          // end: 'center top',
          markers: true,
        },
      });
      gsap.set(split.chars, { y: '100%', opacity: 0 });
      tl.to(
        split.chars,
        { duration: 0.7, y: '0%', opacity: 1, stagger: 0.04 },
        '>-50%'
      );
    },

    // window.addEventListener('resize', function () {
    //   gsap.set('.fullScreen', { autoAlpha: 0 });
    //   // clear the timeout
    //   clearTimeout(timeout);
    //   // start timing for event "completion"
    //   timeout = setTimeout(init, delay);
    // });
    [tl, cn]
  );

  return <Container ref={el}>{children}</Container>;
}

export default SplitTextLine;

// autoRefreshEvents: "DOMContentLoaded,load,resize"

export const Container = styled.div`
  .lines {
    overflow: hidden;
  }
`;
