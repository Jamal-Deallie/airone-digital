import { ReactNode, useRef, useLayoutEffect, useEffect } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import styled from 'styled-components';

type PropsSplitTextLine = {
  children?: ReactNode;
  duration?: number;
  delay?: number;
  ease?: string;
  y?: number;
  cn?: string;
  stagger?: number;
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

  useLayoutEffect(() => {
    let split: SplitText;

    let timeout: string | number | NodeJS.Timeout | undefined; // holder for timeout id
    let delay = 250; // delay after event is "complete" to run callback
    function init() {
      if (split) {
        split.revert();
      }
      split = new SplitText(text.current, {
        type: 'lines',
      });

      tl.current = gsap.timeline();

      tl.current.fromTo(
        split.lines,
        {
          y: '-50%',
          opacity: 0,
  
        },

        {
          y: '0%',
          opacity: 1,
          ease: 'power4.out',
          overflow: 'hidden',
          duration: 2,
          stagger: 0.2,
          scrollTrigger: {
            trigger: el.current,
            start: 'top center',
            end: 'bottom',
          },
        }
      );
    }
    init();
    // window.addEventListener('resize', function () {
    //   gsap.set('.fullScreen', { autoAlpha: 0 });
    //   // clear the timeout
    //   clearTimeout(timeout);
    //   // start timing for event "completion"
    //   timeout = setTimeout(init, delay);
    // });
  }, []);

  return (
    <Container ref={el}>
      <h2 ref={text}>We don’t care just about design. We care about you</h2>
    </Container>
  );
}

export default SplitTextLine;

// autoRefreshEvents: "DOMContentLoaded,load,resize"

export const Container = styled.div`
  h2 {
    font-size: clamp(2.33rem, calc(1.39rem + 4.7vw), 8rem);
    line-height: 1;
  }
`;
