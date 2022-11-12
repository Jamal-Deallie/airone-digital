import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styles from '@/styles/containers/ads.module.scss';
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
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.flex}>
          <div className={styles.column} ref={ref1}>
            <div className={styles.inner}>
              <div className={styles.number}>
                <h3 id='ad-text1'>01</h3>
              </div>
              <div className={styles.desc}>
                <p id='ad-text1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className={styles.img} id='ad-img1'>
                <Image
                  alt='brand-identity'
                  src={
                    'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1667602975/air_one/tropulis_bxiph8.webp'
                  }
                  layout='fill'
                  objectFit='cover'
                  quality={100}
                />
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.inner}>
              <div className={styles.number}>
                <h3 id='ad-text1'>02</h3>
              </div>
              <div className={styles.img} id='ad-img1'>
                <Image
                  alt='brand-identity'
                  src={
                    'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1667602974/air_one/disney_rj5gtn.webp'
                  }
                  layout='fill'
                  objectFit='cover'
                  quality={100}
                />
              </div>

              <div className={styles.desc}>
                <p id='ad-text1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flex} ref={ref2}>
          <div className={styles.column}>
            <div>
              <div className={styles.number}>
                <h3 id='ad-text2'>03</h3>
              </div>
              <div className={styles.desc}>
                <p id='ad-text2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className={styles.img} id='ad-img2'>
              <Image
                alt='brand-identity'
                src={
                  'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1667613926/air_one/mcdonalds_nupbsf.webp'
                }
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.inner}>
              <div className={styles.number}>
                <h3 id='ad-text2'>04</h3>
              </div>

              <div className={styles.img} id='ad-img2'>
                <Image
                  alt='brand-identity'
                  src={
                    'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1667602981/air_one/marmite_vcgcni.webp'
                  }
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
    </div>
  );
};

export default Ads;
