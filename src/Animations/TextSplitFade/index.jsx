import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useRefSelector from '../../Hooks/useRefSelector';

export default function TextSplitFade({
  target,
  children,
  duration,
  delay,
  y,
  ease,
}) {
  const [q, ref] = useRefSelector();

  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    let split = new SplitText(q(`#split-${target}`), { type: 'words' });

    let tl = gsap.timeline({
      onComplete() {
        split.revert();
      },
    });

    const animation = tl.fromTo(
      split.words,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'back.out',
        stagger: 0.05,
      }
    );

    let st = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top center',
      end: 'bottom',
      animation: animation,
    });

    return () => {
      animation.progress(1); // reverts the SpliText in the onComplete
      st.kill();
    };
  });

  return <div ref={ref}>{children}</div>;
}
