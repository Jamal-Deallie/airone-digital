import { useRef } from 'react';
import styles from '@/styles/statistics.module.css';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import { StatisticsResults } from '../../types/index';
import StatisticsCol from '@/animations/Statistics';

type Props = {
  stats: StatisticsResults[];
};
const Statistics = ({ stats }: Props) => {
  let mainData: Array<any> = ([] = stats.slice(0, 2));
  let secData: Array<any> = ([] = stats.slice(2, 3));
  const ref = useRef();

  return (
    <div className='primary-bg' ref={ref}>
      <div className='container'>
        <div>
          <h1 className='heading-lrg'>Our</h1>
          <h1 className='heading-lrg mr-lft'>Numbers</h1>
        </div>
        <div className='mr-auto mx-m'>
          <p id='stat-text'>
            Sit nemo veniam ut repudiandae quos aut quas voluptas sit repellat
            sint et unde reiciendis sed consequatur aspernatur est sint
            incidunt. Aut iure vitae eos cupiditate doloremque qui magni quia
            sit minus internos.
          </p>
        </div>
        <div className={styles['inner-cont']}>
          <div className={styles['statistic-items']}>
            <StatisticsCol>
              {mainData.map(({ id, title, desc, stat }) => {
                return (
                  <div key={id} className={styles['flex-cont']}>
                    <div className={styles['desc-cont']}>
                      <h3 className={styles.title}>{title}</h3>
                      <div className='desc'>
                        <p className={styles['stats-desc']} id='stat-body'>
                          {desc}
                        </p>
                      </div>
                    </div>
                    <div className='of-h'>
                      <h1 className={styles['stats-stat']} id='stat-num'>
                        {stat}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </StatisticsCol>
          </div>
          {secData.map(({ id, title, stat, desc }) => {
            return (
              <div className={styles.footer} key={id}>
                <h1 className={styles['footer-stat']}>{stat}</h1>
                <div className={styles['footer-desc-cont']}>
                  <h3 className={styles.title}>{title}</h3>
                  <div>
                    <p className={styles['stats-desc']}>{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
