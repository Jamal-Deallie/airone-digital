import { useRef, ReactNode, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useSelector } from '../hooks/useSelector';

type Props = {
  children: ReactNode;
  ftColor?: string;
  txtTarget?: string;
  duration?: number;
  before?: number;
  after?: number;
};

const ScaleSvg = ({ children, before, after, txtTarget, duration }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  let q = gsap.utils.selector(ref);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const contentAnimation = gsap.fromTo(
      q('#svg'),
      { scaleX: 1, scaleY: 1 },
      {
        scaleY: 0.5,
        scaleX: 0.5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'none',
      }
    );

    let st = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top center',
      markers: true,
      animation: contentAnimation,
    });

    return () => {
      st.kill();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default ScaleSvg;
