import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styles from '../../styles/containers/awards.module.css';
type Props = {};

const Awards = (props: Props) => {
  const ref = useRef<HTMLDivElement>();
  let q = gsap.utils.selector(ref);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    let lines = gsap.utils.toArray(q('#line'));
    let number = gsap.utils.toArray(q('#number'));
    let name = gsap.utils.toArray(q('#name'));
    let icon = gsap.utils.toArray(q('#icon'));
    let sub = gsap.utils.toArray(q('#sub'));
    console.log(lines);
    const contentAnimation = tl
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
      console.log('run');
      st.refresh();
    };
  }, []);

  return (

    <div className={styles.container}>
      <div className={styles['award-header']}>
        <div className={styles['award-header-line']}>
          <h1>Our</h1>
        </div>
        <div className={styles['award-header-line']}>
          <h1>Awards</h1>
        </div>
      </div>
      <div className={styles['award-items-outer']}>
        <div className={styles['award-items-container']} ref={ref}>
          <div className={styles['award-items-wrap']}>
            <div className={styles['award-item']}>
              <div className={styles['award-item-number']} id='number'>
                01
              </div>
              <div className={styles['award-item-name']} id='name'>
                Home
              </div>
              <div className={styles['award-item-sub']} id='sub'>
                Briefly about the main thing
              </div>
              <div className={styles['award-item-icon']} id='icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className={styles['award-item-icon']}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles['award-line']} id='line'></div>
          <span className={styles['award-items-wrap']}>
            <div className={styles['award-item']}>
              <div className={styles['award-item-number']} id='number'>
                02
              </div>
              <div className={styles['award-item-name']} id='name'>
                About
              </div>
              <div className={styles['award-item-sub']} id='sub'>
                A story about people
              </div>
              <div className={styles['award-item-icon']} id='icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className={styles['award-item-icon']}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
                  />
                </svg>
              </div>
            </div>
          </span>
          <div className={styles['award-line']} id='line'></div>
          <span className={styles['award-items-wrap']}>
            <div className={styles['award-item']}>
              <div className={styles['award-item-number']} id='number'>
                03
              </div>
              <div className={styles['award-item-name']} id='name'>
                Vision
              </div>
              <div className={styles['award-item-sub']} id='sub'>
                Philosophy of work
              </div>
              <div className={styles['award-item-icon']} id='icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className={styles['award-item-icon']}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
                  />
                </svg>
              </div>
            </div>
          </span>
          <div className={styles['award-line']} id='line'></div>
          <span className={styles['award-items-wrap']}>
            <div className={styles['award-item']}>
              <div className={styles['award-item-number']} id='number'>
                04
              </div>
              <div className={styles['award-item-name']} id='name'>
                Projects
              </div>
              <div className={styles['award-item-sub']} id='sub'>
                Our practical experiences
              </div>
              <div className={styles['award-item-icon']} id='icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className={styles['award-item-icon']}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
                  />
                </svg>
              </div>
            </div>
          </span>
          <div className={styles['award-line']} id='line'></div>
          <span className={styles['award-items-wrap']}>
            <div className={styles['award-item']}>
              <div className={styles['award-item-number']} id='number'>
                05
              </div>
              <div className={styles['award-item-name']} id='name'>
                Contact
              </div>
              <div className={styles['award-item-sub']} id='sub'>
                Stay in touch with us
              </div>
              <div className={styles['award-item-icon']} id='icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className={styles['award-item-icon']}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
                  />
                </svg>
              </div>
            </div>
          </span>
          <div className={styles['award-line']} id='line'></div>
        </div>
      </div>
    </div>


  );
};

export default Awards;
