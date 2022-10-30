import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

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

  y,
  ease,
  cn,
}: PropsSplitTextLine) {
  let split: any;
  const component = useRef();

  useIsomorphicLayoutEffect(() => {
    let timeout;
    let delay = 250;
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: 'top center',
          end: 'top+=10 center',
        },
      });

      function init() {
        gsap.set('.fullScreen', { opacity: 1 });

        if (split) {
          split.revert();
        }
        split = new SplitText('#splitBody', {
          linesClass: 'lines',
        });

        console.log(split);

        tl.from(split.lines, {
          delay: 1,
          opacity: 0,
          y: '50%',
          duration: 1.5,
          ease: 'power4.out',
          stagger: 0.2,
        });
      }
      init();
      window.addEventListener('resize', function () {
        gsap.set('.fullScreen', { opacity: 0 });
        // clear the timeout
        clearTimeout(timeout);
        // start timing for event "completion"
        timeout = setTimeout(init, delay);
      });
      window.addEventListener('load', init);
    }, component);
    return () => ctx.revert();
  }, []);

  return <div ref={component}>{children}</div>;
}

export default SplitTextLine;

// autoRefreshEvents: "DOMContentLoaded,load,resize"
