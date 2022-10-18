import styles from '../../styles/containers/statistics.module.css';

type StatisticsProps = {
  data: any[];
};

const Statistics = ({ data }: StatisticsProps) => {
  let mainData: Array<any> = ([] = data.slice(0, 2));
  let secData: Array<any> = ([] = data.slice(2, 3));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles['header-line']}>
          <h1>Our</h1>
        </div>
        <div className={styles['header-line']}>
          <h1>Numbers</h1>
        </div>
      </div>
      <div className={styles.desc}>
        <p>
          Sit nemo veniam ut repudiandae quos aut quas voluptas sit repellat
          sint et unde reiciendis sed consequatur aspernatur est sint incidunt.
          Aut iure vitae eos cupiditate doloremque qui magni quia sit minus
          internos.
        </p>
      </div>
      <div className={styles['inner-cont']}>
        <div className={styles['statistic-items']}>
          {mainData.map(({ id, title, desc, stat }) => {
            return (
              <div key={id} className={styles['flex-cont']}>
                <div className={styles['desc-cont']}>
                  <h3 className={styles.title}>{title}</h3>
                  <div className='desc'>
                    <p className={styles['stats-desc']}>{desc}</p>
                  </div>
                </div>
                <div className={styles['stats-cont']}>
                  <h1 className={styles['stats-stat']}>{stat}</h1>
                </div>
              </div>
            );
          })}
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
  );
};

export default Statistics;
