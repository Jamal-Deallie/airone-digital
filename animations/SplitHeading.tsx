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

const SplitTimeline = ({
  children,
  stagger,
  duration,
  y,
  ease,
  delay,
}: PropsSplitTextLine) => {
  // let split: any;
  const root = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let splitHeading = new SplitText('#heading', { type: 'words' });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'top+=10 center',
        },
      });

      tl.fromTo(
        splitHeading.words,
        { y: 100 | y, opacity: 0 },
        {
          opacity: 1,
          y: 0,
          ease: ease ? ease : 'back',
          duration: 1 | duration,
          stagger: 0.1,
          delay: 0 | delay,
        }
      );
      return () => {
        splitHeading.revert();
      };
    }, root);

    return () => ctx.revert();
  }, []);
  return <div ref={root}>{children}</div>;
};

export default SplitTimeline;
