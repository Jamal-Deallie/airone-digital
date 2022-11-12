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
  stagger?: number;
  target?: string;
};

function SplitBody({
  children,
  stagger,
  duration,
  y,
  ease,
  delay,
}: PropsSplitTextLine) {
  const root = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    let timeout: any;
    let delay = 250;
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
        },
      });

      let split = new SplitText('#split-body', {
        linesClass: 'lines',
      });

      gsap.set('.lines', { opacity: 0 });

      function init() {
        gsap.set('.fullScreen', { opacity: 1 });

        if (split) {
          split.revert();
        }
        split = new SplitText('#split-body', {
          linesClass: 'lines',
        });

        tl.from(split.lines, {
          opacity: 0,
          y: 50,
          duration: 0.75,
          ease: 'power4.out',
          stagger: 0.2,
          delay: 0.15,
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
    }, root);
    return () => ctx.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}

export default SplitBody;
