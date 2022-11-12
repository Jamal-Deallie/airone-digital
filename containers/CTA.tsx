import { useRef } from 'react';
import Link from 'next/link';
import StarTwo from '../svgs/StarTwo';
import styles from '@/styles/containers/cta.module.scss';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';

type Props = {};

const CTA = (props: Props) => {
  const el = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          start: 'top top',
          end: 'bottom bottom',
        },
      });

      let heading = gsap.utils.toArray('#cta-heading');
      let link = gsap.utils.toArray('#cta-link');
      tl.fromTo(
        heading,
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
          '#cta-text',
          { y: 100, opacity: 0 },
          {
            opacity: 1,
            y: 0,
            ease: 'back',
            duration: 1,
          },
          '-=75%'
        )
        .fromTo(
          link,
          { y: 100, opacity: 0 },
          {
            opacity: 1,
            y: 0,
            ease: 'back',
            duration: 1,
            stagger: 0.1,
          },
          '-=75%'
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container} ref={el}>
      <div className={styles.outer}>
        <div className={styles.heading}>
          <h1 id='cta-heading'>Heard</h1>
          <h1 id='cta-heading'>Enough</h1>
        </div>

        <div className={styles['inner-cont']}>
          <h1 className={styles['heading-lrg']} id='cta-text'>
            Follow Us
          </h1>
        </div>

        <div className={styles['link-cont']}>
          <Link href='/'>
            <a id='cta-link'>DRIBBLE</a>
          </Link>
          <p>
            <StarTwo newHeight={10} />
          </p>
          <Link href='/'>
            <a id='cta-link'>INSTAGRAM</a>
          </Link>
          <p>
            <StarTwo newHeight={10} />
          </p>
          <Link href='/'>
            <a id='cta-link'>BEHANCE</a>
          </Link>
          <p>
            <StarTwo newHeight={10} />
          </p>
          <Link href='/'>
            <a id='cta-link'>TIK TOK</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
