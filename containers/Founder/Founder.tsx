import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/founder.module.css';
import ColorChanger from '../../animations/ColorChange';
import Button from '@/components/Button/Button';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
type Props = {};

const Founder = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    let ctx = gsap.context(() => {
      let splitHeading = new SplitText('#founder-heading', { type: 'words' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          // end: 'top+=10 center',
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
      )
        .fromTo(
          '#img',
          {
            webkitClipPath: 'inset((0% 100% 0% 0%)',
            clipPath: 'inset(0% 100% 0% 0%)',
          },
          {
            duration: 1,
            webkitClipPath: 'inset(0px 0% 0px 0px)',
            clipPath: 'inset(0px 0% 0px 0px)',
            ease: 'expo.inOut',
          },
          '-=1'
        )
        .fromTo(
          '#about-line',
          { width: '0%' },
          {
            duration: 1,
            width: '100%',
          },
          '-=.5'
        )
        .fromTo(
          '#founder-name',
          { yPercent: -100, opacity: 0 },
          {
            duration: 1,
            ease: 'sine.out',
            yPercent: 0,
            opacity: 1,
          },
          '-=.5'
        )
        .fromTo(
          '#founder-body',
          { yPercent: 100, opacity: 0 },
          {
            duration: 1,
            ease: 'sine.out',
            yPercent: 0,
            opacity: 1,
          },
          '-=1.5'
        );
      return () => {
        splitHeading.revert();
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <ColorChanger bgColor={'#683aff'}>
      <div className='container' ref={ref}>
        <div className={styles.heading}>
          <h1 className='heading-lrg' id='founder-heading'>
            The Founder
          </h1>
        </div>
        <div className={styles.inner}>
          <div className={styles['flx-cont']}>
            <div className={styles.wrap}>
              <div className={styles.name}>
                <p id='founder-name'>Portia Hightower</p>
              </div>
              <div className={styles.line} id='about-line' />

              <div className={styles.desc}>
                <p id='founder-body'>
                  Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Amet
                  volutpat consequat mauris nunc congue nisi vitae. Duis ut diam
                  quam nulla porttitor massa id. Nunc scelerisque viverra mauris
                  in aliquam sem fringilla. Erat pellentesque adipiscing commodo
                  elit. Et netus et malesuada fames ac. Et tortor at risus
                  viverra adipiscing at in tellus integer.
                </p>
              </div>
              <div className='mt-m'>
                <Button>LinkedIn &#8594;</Button>
              </div>
            </div>

            <div className={styles['img-cont']} id='img'>
              <Image
                className={styles.img}
                alt='founder'
                src={'/images/founder-01.png'}
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </ColorChanger>
  );
};

export default Founder;
