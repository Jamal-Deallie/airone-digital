import { ReactNode, useRef, useEffect, useState } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

type Props = {
  children?: ReactNode;
};

function BatchFade({ children }: Props) {
  const root = useRef();
  useEffect(() => {
    let mm = gsap.matchMedia();
    let q = gsap.utils.selector(root.current);
    let targets: any[] = gsap.utils.toArray(q('#logo'));

    mm.add({ isDesktop: '(min-width: 767px)' }, context => {
      targets.forEach((el, index) => {
        const animation = gsap.fromTo(
          el,
          { autoAlpha: 0, y: 100 },
          {
            duration: 0.4,
            ease: 'sine.out',
            y: 0,
            autoAlpha: 1,
            delay: index * 0.1,
          }
        );

        ScrollTrigger.create({
          trigger: root.current,
          start: 'top+=15 center',
          animation: animation,
        });
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={root} style={{ overflow: 'hidden' }}>
      {children}
    </div>
  );
}

export default BatchFade;
