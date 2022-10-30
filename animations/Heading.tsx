import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

type AnimationProps = {
  children?: ReactNode;
};

function Heading({ children }: AnimationProps) {
  let split: any;
  const component = useRef();

  useIsomorphicLayoutEffect(() => {
    let timeout;
    let delay = 250;
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: 'top center',
          end: 'top+=10 center',
        },
      });
      const targets = gsap.utils.toArray('#heading');
      tl.fromTo(
        targets,
        { opacity: 0, x: '-100%' },
        {
          opacity: 1,
          x: '0%',
          duration: 1.5,
          ease: 'power4.out',
          stagger: 0.2,
        }
      );

      function init() {
        gsap.set('.fullscreen', { opacity: 1 });
   
        if (split) {
          split.revert();
        }
        split = new SplitText('#split-body', {
          linesClass: 'lines',
        });


        tl.fromTo(
          split.lines,
          { opacity: 0, y: '50%' },
          {
            opacity: 1,
            y: '100%',
            duration: 1,
            ease: 'power4.out',
            stagger: 0.2,
          }, '=-1'
        );
      }
      init();
      window.addEventListener('resize', function () {
        gsap.set('.fullscreen', { opacity: 0 });
        // clear the timeout
        clearTimeout(timeout);
        // start timing for event "completion"
        timeout = setTimeout(init, delay);
      });
      window.addEventListener('load', init);
    }, component);
    return () => ctx.revert();
  }, []);

  return <div ref={component}>{children}</div>;
}

export default Heading;

// autoRefreshEvents: "DOMContentLoaded,load,resize"
