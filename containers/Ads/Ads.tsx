import Image from 'next/image';
import styles from '../../styles/ads.module.css';
const Ads = () => {
  return (
    <div className={styles.container}>
      <div className={styles['flx-top']}>
        <div className={styles['column']}>
          <div>
            <div>
              <h3 className={styles.number}>01</h3>
            </div>
            <p className={styles['left-desc']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className={styles['left-img']}>
            <Image
              alt='brand-identity'
              src={'/images/tropulis.png'}
              layout='fill'
              objectFit='cover'
              quality={100}
            />
          </div>
        </div>

        <div className={styles['column']}>
          <div className='inner-cont'>
            <div>
              <h3 className={styles.number}>02</h3>
            </div>
          </div>
          <div className={styles['right-img']}>
            <Image
              alt='brand-identity'
              src={'/images/disney.jpeg'}
              layout='fill'
              objectFit='cover'
              quality={100}
            />
          </div>
          <p className={styles['right-desc']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className={styles['flx-bot']}>
        <div className={styles['column-bot']}>
          <div>
            <div>
              <h3 className={styles.number}>03</h3>
            </div>
            <p className={styles['left-desc']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className={styles['left-bot']}>
            <Image
              alt='brand-identity'
              src={'/images/mcdonalds.jpeg'}
              layout='fill'
              objectFit='cover'
              quality={100}
            />
          </div>
        </div>

        <div className={styles['column-bot']}>
          <div className='inner-cont'>
            <div>
              <h3 className={styles.number}>04</h3>
            </div>
          </div>
          <div className={styles['right-bot']}>
            <Image
              alt='brand-identity'
              src={'/images/marmite.jpeg'}
              layout='fill'
              objectFit='cover'
              quality={100}
            />
          </div>
          <p className={styles['right-desc']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ads;
