import { useRef, useEffect, useState, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import Image from 'next/image';
import data from '../../shared/clients.json';
import styles from '@/styles/clients.module.css';
type ClientProps = { data: any[] };

const Clients = () => {
  const ref = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    let ctx = gsap.context(() => {
      let splitHeading = new SplitText('#client-heading', { type: 'words' });

      const tl = gsap.timeline();

      tl.fromTo(
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
      ).fromTo(
        '#client-logo',
        { yPercent: 100, opacity: 0 },
        {
          delay: 0.25,
          duration: 1,
          ease: 'sine.out',
          yPercent: 0,
          opacity: 1,
          stagger: 0.1,
        },
        '-=30%'
      );
      return () => {
        splitHeading.revert();
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className='container ' ref={ref}>
      <div className='txt-ctr pt-xl'>
        <h1 className='heading-lrg  primary-clr' id='client-heading'>
          Our
        </h1>
        <h1 className='heading-lrg  primary-clr' id='client-heading'>
          Clients
        </h1>
      </div>

      <div>
        <div className={styles['flx-cont']}>
          {data.map(({ id, icon, client, slug }) => {
            // const { url} = image?.data?.attributes;

            return icon === false ? (
              <div className={styles['client-cont']} id='client-logo' key={id}>
                <h3 className={styles.name}>{client}</h3>
              </div>
            ) : (
              <div className={styles['img-cont']} id='client-logo' key={id}>
                <Image
                  className={styles.img}
                  key={id}
                  src={`/logos/${slug}.svg`}
                  alt={client}
                  layout='fill'
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clients;
