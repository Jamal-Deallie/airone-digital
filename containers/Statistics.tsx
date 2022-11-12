import { useRef, useEffect } from 'react';
import styles from '@/styles/containers/statistics.module.scss';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import Heading from '@/animations/HeadingLeft';
import { StatisticsResults } from '../types/index';
import StatisticsCol from '@/animations/Statistics';

type Props = {
  stats: StatisticsResults[];
};
const Statistics = ({ stats }: Props) => {
  let mainData: Array<any> = ([] = stats.slice(0, 2));
  let secData: Array<any> = ([] = stats.slice(2, 3));
  const ref = useRef();
  useIsomorphicLayoutEffect(() => {}, []);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.outer}>
        <Heading heading={'#stat-heading'} desc={'#stat-desc'}>
          <div className={styles.heading}>
            <h1 id='stat-heading'>Our</h1>
            <h1 id='stat-heading'>Numbers</h1>
            <div className={styles.desc}>
              <p id='stat-desc'>
                Sit nemo veniam ut repudiandae quos aut quas voluptas sit
                repellat sint et unde reiciendis sed consequatur aspernatur est
                sint incidunt. Aut iure vitae eos cupiditate doloremque qui
                magni quia sit minus internos.
              </p>
            </div>
          </div>
        </Heading>

        <StatisticsCol>
          <div className={styles.inner}>
            {mainData.map(({ id, title, desc, stat }) => {
              return (
                <div key={id} className={styles.flex}>
                  <div className={styles.content}>
                    <div className={styles.title}>
                      <h3 id='title'>{title}</h3>
                    </div>
                    <div className={styles.desc}>
                      <p id='desc'>{desc}</p>
                    </div>
                  </div>
                  <div className={styles.stat}>
                    <h1 id='stat-num'>{stat}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </StatisticsCol>
        {secData.map(({ id, title, stat, desc }) => {
          return (
            <div className={styles.footer} key={id}>
              <h1>{stat}</h1>
              <div>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.desc}>
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statistics;
