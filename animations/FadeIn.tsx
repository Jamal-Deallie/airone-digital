import React, { useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';

type AnimProps = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  y?: number;
};

const FadeIn = ({ children, duration, delay, y }: AnimProps) => {
  const el = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.set(el.current, {
        transform: 'translate(0px, ' + (y || 40) + 'px)',
        opacity: 0,
      });

      let anim = gsap.to(el.current, {
        y: 0,
        opacity: 1,
        delay: delay || 0,
        duration: duration || 0.5,
        ease: 'back.out',
      });

      let st = ScrollTrigger.create({
        trigger: el.current,
        start: 'top +=200px',
        end: 'bottom',
        animation: anim,
      });

      return () => {
        st.kill();
      };
    });

    return () => ctx.revert();
  }, []);

  return <div ref={el}>{children}</div>;
};

export default FadeIn;
