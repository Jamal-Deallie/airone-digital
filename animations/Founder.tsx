import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

type Props = {
  children?: ReactNode;
};

function Founder({ children }: Props) {
  const root = useRef();

  useIsomorphicLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add(
      { isDesktop: '(min-width: 767px)' },
      context => {
        let q = gsap.utils.selector(root.current);
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top+=10 center',
          },
        });
        const targets = gsap.utils.toArray(q('#heading'));
        tl.fromTo(
          targets,
          { opacity: 0, x: '-100%' },
          {
            opacity: 1,
            x: '0%',
            duration: 1,
            ease: 'power4.out',
            stagger: 0.2,
          }
        ).fromTo(
          q('#desc'),
          { y: '150%' },
          {
            y: '0%',
            ease: 'back',
            duration: 0.75,
          },
          '.7'
        );
      },
      root
    );
  }, []);

  return <div ref={root}>{children}</div>;
}

export default Founder;
