import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

type Props = {
  children?: ReactNode;
};

function Awards({ children }: Props) {
  const root = useRef();

  useIsomorphicLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add({ isDesktop: '(min-width: 767px)' }, context => {
      let ctx = gsap.context(() => {
        let q = gsap.utils.selector(root);
        let lines = gsap.utils.toArray(q('#line'));
        let number = gsap.utils.toArray(q('#number'));
        let name = gsap.utils.toArray(q('#name'));
        let icon = gsap.utils.toArray(q('#icon'));
        let sub = gsap.utils.toArray(q('#sub'));
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top+=10 center',
          },
        });

        tl.fromTo(
          lines,
          { width: '0%' },
          {
            duration: 1,
            stagger: {
              amount: 0.5,
            },
            width: '100%',
          },
          '-=.2'
        )
          .fromTo(
            number,
            { yPercent: 110 },
            {
              duration: 1,
              stagger: {
                amount: 0.5,
              },
              yPercent: 0,
            },
            '-=1.5'
          )
          .fromTo(
            name,
            { y: 100 },
            {
              duration: 1,
              stagger: {
                amount: 0.5,
              },
              y: 0,
            },
            '-=1.3'
          )
          .fromTo(
            sub,
            { y: 100 },
            {
              duration: 1,
              stagger: {
                amount: 0.5,
              },
              y: 0,
            },
            '-=1.1'
          )
          .fromTo(
            icon,
            { y: 100 },
            {
              duration: 1,
              stagger: {
                amount: 0.5,
              },
              y: 0,
            },
            '-=1'
          );
      }, );
      return () => ctx.revert();
    });
  }, []);

  return <div ref={root}>{children}</div>;
}

export default Awards;
