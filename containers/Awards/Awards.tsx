import { useLayoutEffect, useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import styles from '@/styles/awards.module.css';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import data from '../../shared/awards.json';
type Props = {};

const Awards = (props: Props) => {
  const ref = useRef<HTMLDivElement>();
  let q = gsap.utils.selector(ref);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    let tl = gsap.timeline();
    let lines = gsap.utils.toArray(q('#line'));
    let number = gsap.utils.toArray(q('#number'));
    let name = gsap.utils.toArray(q('#name'));
    let icon = gsap.utils.toArray(q('#icon'));
    let sub = gsap.utils.toArray(q('#sub'));
    let splitHeading = new SplitText('#award-heading', { type: 'words' });
    console.log(lines);
    const contentAnimation = tl
      .fromTo(
        splitHeading.words,
        { y: -100, opacity: 0 },
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
        lines,
        { width: '0%' },
        {
          duration: 1,
          stagger: {
            amount: 0.5,
          },
          width: '100%',
        },
        '-=.2'
      )
      .fromTo(
        number,
        { yPercent: 100 },
        {
          duration: 1,
          stagger: {
            amount: 0.5,
          },
          yPercent: 0,
        },
        '-=1.5'
      )
      .fromTo(
        name,
        { y: 100 },
        {
          duration: 1,
          stagger: {
            amount: 0.5,
          },
          y: 0,
        },
        '-=1.3'
      )
      .fromTo(
        sub,
        { y: 100 },
        {
          duration: 1,
          stagger: {
            amount: 0.5,
          },
          y: 0,
        },
        '-=1.1'
      )
      .fromTo(
        icon,
        { y: 100 },
        {
          duration: 1,
          stagger: {
            amount: 0.5,
          },
          y: 0,
        },
        '-=1'
      );

    let st = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top center',
      animation: contentAnimation,
    });

    return () => {
      st.refresh();
    };
  }, []);

  return (
    <div className='primary-bg'>
      <div className='container'>
        <div className='txt-ctr'>
          <h1 className='heading-lrg' id='award-heading'>
            Our
          </h1>
          <h1 className='heading-lrg' id='award-heading'>
            Awards
          </h1>
        </div>

        <div className={styles['award-items-outer']}>
          <div className={styles['award-items-container']} ref={ref}>
            {data.map(({ id, number, ad, cat, award }) => {
              return (
                <div key={id}>
                  <div className={styles['award-items-wrap']}>
                    <div className={styles['award-item']}>
                      <div className={styles['award-item-number']} id='number'>
                        {number}
                      </div>
                      <div className={styles['award-item-name']} id='name'>
                        {ad}
                      </div>
                      <div className={styles['award-item-sub']} id='sub'>
                        {cat}
                      </div>
                      <div className={styles['award-item-icon']} id='icon'>
                        {award}
                      </div>
                    </div>
                  </div>
                  <div className={styles['award-line']} id='line'></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
