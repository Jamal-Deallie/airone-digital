import { useEffect, useRef, ReactNode } from 'react';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayout';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

type Props = {
  children: ReactNode;
  target: string;
  currColor: string;
  prevColor: string;
  fontColor: string;
};

const ColorChange = ({
  children,
  target,
  currColor,
  prevColor,
  fontColor,
}: Props) => {
  const ref = useRef<HTMLElement>(null);
  //   const arrRefs = useRef<Array<HTMLElement>>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function animateColor(color: string) {
      const tl = gsap.timeline({});
      tl.to(target, {
        color: fontColor,
        ease: 'power2.inOut',
      }).to(ref.current, {
        backgroundColor: color,
        ease: 'linear',
      });
    }

    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top-=30 center',
      end: 'top+=10 center',
      markers: true,
      onEnter: () => {
        animateColor(currColor as string);
      },
      onEnterBack: () => {
        animateColor(prevColor as string);
      },
    });
  }, []);
  return (
    <section ref={ref} className='section'>
      {children}
    </section>
  );
};

export default ColorChange;
