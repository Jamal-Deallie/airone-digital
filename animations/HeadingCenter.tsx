import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

type Props = {
  children?: ReactNode;
};

function HeadingCenter({ children }: Props) {
  const root = useRef();
  useIsomorphicLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add(
      { isDesktop: '(min-width: 767px)' },
      context => {
        let q = gsap.utils.selector(root.current);
        let splitHeading = new SplitText(q('#heading'), { type: 'words' });
        const animation = gsap.fromTo(
          splitHeading.words,
          { y: -100, opacity: 0 },
          {
            delay: 0.5,
            opacity: 1,
            y: 0,
            ease: 'back',
            duration: 1,
            stagger: 0.1,
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
  }, []);

  return (
    <div ref={root} style={{ overflow: 'hidden' }}>
      {children}
    </div>
  );
}

export default HeadingCenter;
