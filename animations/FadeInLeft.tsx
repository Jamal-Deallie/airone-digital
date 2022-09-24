import { useRef, ReactNode } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

type PropsFadeInUp = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  ease?: string;
  x?: number;
};

const FadeInLeft = ({ children, duration, delay, x, ease }: PropsFadeInUp) => {
  const el = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let animation = gsap.fromTo(
      el.current,
      { opacity: 0, xPercent: x || 40 },
      {
        xPercent: 0,
        opacity: 1,
        delay: delay || 0,
        duration: duration || 0.5,
        ease: ease || 'back.out',
        scrollTrigger: {
          trigger: el.current,
          start: 'top 50%',
        },
      }
    );
    return () => {
      animation.scrollTrigger.kill();
    };
  }, [el]);
  return <div ref={el}>{children}</div>;
};

export default FadeInLeft;
