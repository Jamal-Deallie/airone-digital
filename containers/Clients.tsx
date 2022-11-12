import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import BatchAnimation from '@/animations/BatchFade';
import HeadingAnimation from '@/animations/HeadingCenter';
import Image from 'next/image';
import data from '../shared/clients.json';
import styles from '@/styles/containers/clients.module.scss';
import { ClientResults } from '../typings';

type Props = {
  clients: ClientResults[];
};

const Clients = ({ clients }: Props) => {
  const ref = useRef();

  console.log(clients);
  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.outer}>
        <HeadingAnimation>
          <h1 id='heading'>Our</h1>
          <h1 id='heading'>Clients</h1>
        </HeadingAnimation>
        <BatchAnimation>
          <div className={styles.flex} id='batch-wrap'>
            {clients.map(({ id, client }) => {
              return (
                <div className={styles.clients} id='logo' key={id}>
                  <div className={styles.inner}>
                    <div className={styles.wrap}>
                      <h3>{client}</h3>
                      <div className={styles.star} id='star-land'>
                        <Image
                          alt='star'
                          src={'/images/circle.svg'}
                          layout='fill'
                          objectFit='cover'
                          quality={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </BatchAnimation>
      </div>
    </div>
  );
};

export default Clients;
