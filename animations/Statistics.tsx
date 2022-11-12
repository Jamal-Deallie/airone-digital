import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

type AnimationProps = {
  children?: ReactNode;
};

function StatisticsCol({ children }: AnimationProps) {
  let split: any;
  let splitHeading: any;
  const component = useRef();
  useIsomorphicLayoutEffect(() => {

    let timeout;
    let delay = 250;
    let ctx = gsap.context(() => {
      const desc = gsap.utils.toArray('#desc');
      const titles = gsap.utils.toArray('#title');
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: 'top center',
          end: 'top+=10 center',
        },
      });

      tl.fromTo(
        '#stat-num',
        { y: '110%' },
        {
          y: '0%',
          ease: 'back',
          duration: 1.5,
          stagger: 0.1,
        }
      )
        .fromTo(
          titles,
          { y: '200%' },
          {
            y: '0%',
            ease: 'back',
            duration: 1,
            stagger: 0.1,
          },
          '.5'
        )
        .fromTo(
          desc,
          { y: '200%' },
          {
            y: '0%',
            ease: 'back',
            duration: 1.5,
            stagger: 0.1,
          },
          '.7'
        );
    }, component);
    return () => ctx.revert();
  }, []);
  return <div ref={component}>{children}</div>;
}

export default StatisticsCol;
