
import styles from '@/styles/containers/awards.module.scss';
import HeadingAnimation from '@/animations/HeadingCenter';
import AwardsAnimation from '@/animations/Awards';
import data from '../shared/awards.json';

type Props = {};

const Awards = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <HeadingAnimation>
          <div className={styles.heading}>
            <h1 id='heading'>Our</h1>
            <h1 id='heading'>Awards</h1>
          </div>
        </HeadingAnimation>

        <AwardsAnimation>
          <div className={styles.flex}>
            <div className={styles.wrap}>
              {data.map(({ id, number, ad, cat, award }) => {
                return (
                  <div key={id}>
                    <div className={styles['award-items-wrap']}>
                      <div className={styles['award-item']}>
                        <div className={styles.number} id='number'>
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
                    <div className={styles.line} id='line'></div>
                  </div>
                );
              })}
            </div>
          </div>
        </AwardsAnimation>
      </div>
    </div>
  );
};

export default Awards;
