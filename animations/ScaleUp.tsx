import { useRef, ReactNode } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
  ftColor?: string;
  txtTarget: string;
  duration?: number;
  before?: number;
  after?: number;
};

const ScaleUp = ({ children, before, after, txtTarget, duration }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const contentAnimation = gsap.fromTo(
      txtTarget,
      { fontSize: 'clamp(2.33rem, calc(0.85rem + 7.43vw), 9.77rem)' },
      {
        duration: 1,
        fontSize: 'clamp(1.14rem, calc(-9.97rem + 44.45vw), 43.37rem)',
        ease: 'circ.out',
      }
    );

    let st = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top center',
      animation: contentAnimation,
    });

    return () => {
      st.kill();
    };
  }, [ref]);

  return <Container ref={ref}>{children}</Container>;
};

export default ScaleUp;

const Container = styled.div`
  width: 100%;
  background-color: white;
`;
