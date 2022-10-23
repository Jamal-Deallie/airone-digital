import { useLayoutEffect, useEffect, useRef } from 'react';
import styles from '@/styles/about.module.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';

type Props = {};

const About = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    let ctx = gsap.context(() => {
      let splitHeading = new SplitText('#about-heading', { type: 'words' });
      let splitBody = new SplitText('#about-body', { type: 'lines' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top center',
          end: 'top+=10 center',
        },
      });

      tl.fromTo(
        splitHeading.words,
        { y: 100, opacity: 0 },
        {
          opacity: 1,
          y: 0,
          ease: 'back',
          duration: 1,
          stagger: 0.1,
        }
      ).fromTo(
        splitBody.lines,
        { y: 50, opacity: 0 },
        {
          opacity: 1,
          y: 0,
          ease: 'power4.out',
          duration: 1.5,
          stagger: 0.2,
        }
      );
      return () => {
        splitHeading.revert();
        splitBody.revert();
      };
    });

    return () => ctx.revert(); // useLayoutEffect cleanup
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles['heading-outer']}>
        <div ref={ref}>
          <div className={styles['heading-cont']}>
            <h2 className={styles['heading']} id='about-heading'>
              We don’t care just about design. We care about you.
            </h2>
          </div>
        </div>
      </div>
      <div className={styles['text-cont']}>
        <p id='about-body'>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit
          aliquet elit, eget tincidunt nibh pulvinar a.Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae
        </p>
      </div>
    </div>
  );
};

export default About;
