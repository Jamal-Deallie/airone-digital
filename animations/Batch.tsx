import { useRef, ReactNode } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';

type Props = {
  children: ReactNode;
};

const Batch = ({ children }: Props) => {
  const el = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.set('#batch-wrap', { y: 200, autoAlpha: 0 });
      ScrollTrigger.batch('#batch-wrap', {
        start: '-100px bottom',
        onEnter: elements =>
          gsap.to(elements, {
            y: 0,
            autoAlpha: 1,
            duration: 3,
            overwrite: true,
            ease: 'power4',
            stagger: 0.5,
          }),
        onLeaveBack: elements =>
          gsap.set(elements, { y: 200, autoAlpha: 0, overwrite: true }),
      });
    }, el);

    return () => ctx.revert();
  }, []);
  return <div ref={el}>{children}</div>;
};

export default Batch;
