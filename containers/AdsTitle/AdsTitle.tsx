import { useRef } from 'react';
import styles from '@/styles/adsTitle.module.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';

const AdsTitle = () => {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let targets = gsap.utils.toArray('#ads-title');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 10%',
        markers: true,
      },
    });

    tl.fromTo(
      targets,
      { opacity: 0, y: 100, scale: 4 },
      { opacity: 1, scale: 1, duration: 1, y: 0, stagger: 0.5 }
    );
  });

  return (
    <div className='primary-bg' ref={ref}>
      <div className='container'>
        <h1 className={styles.heading} id='ads-title'>
          We
        </h1>
        <h1 className={styles.heading} id='ads-title'>
          Think
        </h1>
        <h1 className={styles['big-text']} id='ads-title'>
          BIG
        </h1>
      </div>
    </div>
  );
};

export default AdsTitle;
