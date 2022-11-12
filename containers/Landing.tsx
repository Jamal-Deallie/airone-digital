import { useRef } from 'react';
import styles from '@/styles/containers/landing.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import GSDevTools from 'gsap/dist/GSDevTools';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';

const Landing = () => {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, GSDevTools);
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top center',
        },
      });
      let lines = gsap.utils.toArray('#land-line');
      let icons = gsap.utils.toArray('#star-land');
      tl.fromTo(
        lines,
        { y: 100, opacity: 0 },
        {
          delay: 0.5,
          opacity: 1,
          y: 0,
          ease: 'back',
          duration: 1,
          stagger: 0.1,
        }
      )
        .fromTo(
          icons,
          { y: 100, opacity: 0 },
          {
            delay: 0.5,
            opacity: 1,
            y: 0,
            ease: 'back',
            duration: 1,
            stagger: 0.1,
          },
          ''
        )
        .fromTo(
          icons,
          { scaleX: 1, scaleY: 1 },
          {
            scaleY: 0.6,
            scaleX: 0.6,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'none',
          }
        )
        .fromTo(
          '#arrow',
          { y: 10 },
          {
            y: 0,
            duration: 0.75,
            repeat: -1,
            yoyo: true,
            ease: 'none',
          },
          '-=1'
        )
        .fromTo(
          '#arrow-wrap',
          { opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'none',
          },
          '-=.75'
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.heading}>
            <ul>
              <li>
                <div className={styles.wrap}>
                  <div className={styles.star} id='star-land'>
                    <Image
                      alt='star'
                      src={'/images/str.svg'}
                      layout='fill'
                      objectFit='cover'
                      quality={100}
                    />
                  </div>
                </div>
                <h1 id='land-line'>Creative</h1>
                <div className={styles.wrap}>
                  <div className={styles.star} id='star-land'>
                    <Image
                      alt='star'
                      src={'/images/str.svg'}
                      layout='fill'
                      objectFit='cover'
                      quality={100}
                    />
                  </div>
                </div>
              </li>
              <li>
                <h1 id='land-line'>IDEAS OUT</h1>
              </li>
              <li>
                <h1 id='land-line'>OF THIS</h1>
              </li>
              <li>
                <div className={styles.wrap}>
                  <div className={styles.star} id='star-land'>
                    <Image
                      alt='star'
                      src={'/images/diamond.svg'}
                      layout='fill'
                      objectFit='cover'
                      quality={100}
                    />
                  </div>
                </div>
                <div>
                  <h1 id='land-line'>WORLD</h1>
                </div>
                <div className={styles.wrap}>
                  <div className={styles.star} id='star-land'>
                    <Image
                      alt='star'
                      src={'/images/str1.svg'}
                      layout='fill'
                      objectFit='cover'
                      quality={100}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div id='arrow-wrap'>
            <div className={styles.arrow} id='arrow'>
              <Image
                alt='scroll down'
                src={'/icons/arrw.svg'}
                height={140}
                width={70}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
