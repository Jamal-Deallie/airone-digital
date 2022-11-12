import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger);

type AnimationProps = {
  children?: ReactNode;
  // heading: string;
  // desc: string;
};

function Heading({ children }: AnimationProps) {
  const root = useRef();

  useIsomorphicLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add(
      { isDesktop: '(min-width: 767px)' },
      context => {
        let q = gsap.utils.selector(root.current);
        const targets = gsap.utils.toArray(q('#heading'));
        let tl = gsap.timeline();

        const animation = tl
          .fromTo(
            targets,
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: 'power4.out',
              stagger: 0.21,
            }
          )
          .fromTo(
            q('#desc'),
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'circ.out',
            }
          );

        let st = ScrollTrigger.create({
          trigger: root.current,
          start: 'top+=15 center',
          animation: animation,
        });

        return () => {
          st.refresh();
        };
      },
      root
    );

    return () => {
      mm.revert();
    };
  }, []);

  return <div ref={root}>{children}</div>;
}

export default Heading;

// autoRefreshEvents: "DOMContentLoaded,load,resize"
