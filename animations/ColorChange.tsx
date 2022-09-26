import { useRef, ReactNode } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist//ScrollSmoother';
type Props = {
  children: ReactNode;
  ftColor?: string;
  ftTarget?: string;
  duration?: number;
  bgColor: string;
};

const ColorChange = ({
  children,
  ftColor,
  ftTarget,
  duration,
  bgColor,
}: Props) => {
  const ref = useRef<HTMLElement>(null);
  const tl = useRef(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    tl.current = gsap.timeline();

    const contentAnimation = tl.current.to(ref.current, {
      duration: 1,
      backgroundColor: bgColor,
      ease: 'power3.in',
    });

    if (ftColor) {
      tl.current.add(
        gsap.to(ftTarget, {
          color: ftColor,
          ease: 'power3.in',
          duration: duration | 1,
        }),
        '<'
      );
    }

    let st = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top center',
      end: 'top+=10 center',
      markers: true,
      animation: contentAnimation,
    });

    return () => {
      st.kill();
    };
  }, [bgColor, ref]);

  return (
    <section ref={ref} className='section'>
      {children}
    </section>
  );
};

export default ColorChange;
