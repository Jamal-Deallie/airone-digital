import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';

type PropsSplitTextLine = {
  children: ReactNode;
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

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    let lineSplit = new SplitText(cn, {
      type: 'lines',
    });

    tl.current = gsap.timeline({
      onComplete() {
        lineSplit.revert();
      },
    });

    const flexAnimation = tl.current.fromTo(
      lineSplit.lines,
      {
        y: (y || 50) + '%',
        fontSize: 'clamp(2.33rem, calc(1.39rem + 4.70vw), 8rem)',
        opacity: 0,
      },
      {
        y: '0%',
        opacity: 1,
        ease: ease || 'power4.out',
        overflow: 'hidden',
        duration: 1,
        stagger: stagger || 0.2,
      }
    );

    let st = ScrollTrigger.create({
      trigger: el.current,
      start: 'top center',
      end: 'bottom',
      animation: flexAnimation,
      markers: true,
    });
    return () => {
      flexAnimation.progress(1);
      st.kill();
    };
  }, [tl, el]);

  return <div ref={el}>{children}</div>;
}

export default SplitTextLine;

// autoRefreshEvents: "DOMContentLoaded,load,resize"