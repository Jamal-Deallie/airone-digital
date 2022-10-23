import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styles from '@/styles/ads.module.css';
gsap.registerPlugin(ScrollTrigger);
const Ads = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let img1 = gsap.utils.toArray('#ad-img1');
    let text = gsap.utils.toArray('#ad-text1');
    let ctx1 = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref1.current,
          start: 'top center',
          end: 'top+=10 center',
        },
      });

      tl.fromTo(
        text,
        { yPercent: -100, opacity: 0 },
        {
          duration: 1,
          ease: 'sine.out',
          yPercent: 0,
          opacity: 1,
          stagger: 0.25,
        }
      ).fromTo(
        img1,
        {
          webkitClipPath: 'inset((0% 100% 0% 0%)',
          clipPath: 'inset(0% 100% 0% 0%)',
        },
        {
          duration: 1,
          webkitClipPath: 'inset(0px 0% 0px 0px)',
          clipPath: 'inset(0px 0% 0px 0px)',
          ease: 'expo.inOut',
          stagger: 0.25,
        },
        '-=75%'
      );
    });
    return () => ctx1.revert();
  }, []);

  useEffect(() => {
    let img2 = gsap.utils.toArray('#ad-img2');
    let text = gsap.utils.toArray('#ad-text2');

    let ctx2 = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref2.current,
          start: 'top center',
          end: 'top+=10 center',
        },
      });

      tl.fromTo(
        text,
        { yPercent: -100, opacity: 0 },
        {
          duration: 1,
          ease: 'sine.out',
          yPercent: 0,
          opacity: 1,
          stagger: 0.25,
        }
      ).fromTo(
        img2,
        {
          webkitClipPath: 'inset((0% 100% 0% 0%)',
          clipPath: 'inset(0% 100% 0% 0%)',
        },
        {
          duration: 1,
          webkitClipPath: 'inset(0px 0% 0px 0px)',
          clipPath: 'inset(0px 0% 0px 0px)',
          ease: 'expo.inOut',
          stagger: 0.25,
        },
        '-=75%'
      );
    });

    return () => ctx2.revert();
  }, []);

  return (
    <div className='primary-bg'>
      <div className='container'>
        <div className={styles['flx-top']}>
          <div className={styles['column']} ref={ref1}>
            <div>
              <div className='of-h'>
                <h3 className={styles.number} id='ad-text1'>
                  01
                </h3>
              </div>
              <div className='of-h'>
                <p className={styles['left-desc']} id='ad-text1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className={styles['left-img']} id='ad-img1'>
              <Image
                alt='brand-identity'
                src={'/images/tropulis.png'}
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
          </div>

          <div className={styles['column']}>
            <div className='inner-cont'>
              <div className='of-h'>
                <h3 className={styles.number} id='ad-text1'>
                  02
                </h3>
              </div>
            </div>
            <div className={styles['right-img']} id='ad-img1'>
              <Image
                alt='brand-identity'
                src={'/images/disney.jpeg'}
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
            <div className='of-h'>
              <p className={styles['right-desc']} id='ad-text1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className={styles['flx-bot']} ref={ref2}>
          <div className={styles['column-bot']}>
            <div>
              <div className='of-h'>
                <h3 className={styles.number} id='ad-text2'>
                  03
                </h3>
              </div>
              <div className='of-h'>
                <p className={styles['left-desc']} id='ad-text2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className={styles['left-bot']} id='ad-img2'>
              <Image
                alt='brand-identity'
                src={'/images/mcdonalds.jpeg'}
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
          </div>

          <div className={styles['column-bot']}>
            <div className='inner-cont'>
              <div>
                <h3 className={styles.number} id='ad-text2'>
                  04
                </h3>
              </div>
            </div>
            <div className={styles['right-bot']} id='ad-img2'>
              <Image
                alt='brand-identity'
                src={'/images/marmite.jpeg'}
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
            <p className={styles['right-desc']} id='ad-text2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
