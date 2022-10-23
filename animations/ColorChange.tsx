import { useRef, ReactNode, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

type Props = {
  children: ReactNode;
  ftColor?: string;
  duration?: number;
  bgColor: string;
};

const ColorChange = ({ children, ftColor, duration, bgColor }: Props) => {
  const ref = useRef<HTMLElement>(null);
  let q = gsap.utils.selector(ref);
  const tl = useRef(null);



  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    tl.current = gsap.timeline();
    // let baseComponent = gsap.utils.selector('#baseComponent');

    const contentAnimation = tl.current
      // .to(baseComponent, {
      //   delay: 0,
      //   duration: 0,
      //   css: { visibility: 'visible' },
      // })

      .to(ref.current, {
        duration: 1,
        backgroundColor: bgColor,
        ease: 'power3.in',
      });

    if (ftColor) {
      tl.current.add(
        gsap.to(q('#text'), {
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
      animation: contentAnimation,
    });

    return () => {
      console.log('run');
      st.refresh();
    };
  }, [bgColor, ref]);

  return (
    <section ref={ref}>
      {children}
    </section>
  );
};

export default ColorChange;