import {
  Section,
  InnerContainer,
  ScrollContainer,
  HeadingContainer,
} from './styled';
import { Header } from '../../components/Header/Header';
import ScrollIcon from '../../components/ScrollIcon/ScrollIcon';
import styles from '../../styles/landing.module.css';
import Earth from '../../svgs/Earth';
import Rocket from '../../svgs/Rocket';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className={styles['outer-container']}>
      <div className={styles['inner-container']}>
        <div className={styles['header-cont']}>
          <div className={styles.heading}>
            <div className='landing--header'>
              <div className={styles.line}>
                {/* <div className={styles.star}>
                  <Image
                    alt='brand-identity'
                    src={'/images/star-1.png'}
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                  />
                </div> */}
                <h1>Creative</h1>
                {/* <div className={styles.rocket}>
                  <Image
                    alt='brand-identity'
                    src={'/images/rocket.png'}
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                  />
                </div> */}
              </div>
              <div className={styles.line}>
                <h1> IDEAS OUT OF THIS</h1>
              </div>

              <div className={styles.line}>
                {/* <div className={styles.earth}>
                  <Image
                    alt='brand-identity'
                    src={'/images/globe.png'}
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                  />
                </div> */}

                <h1>WORLD</h1>
                {/* <div className={styles.ufo}>
                  <Image
                    alt='brand-identity'
                    src={'/images/ufo.png'}
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className={styles['scroll-wrap']}>
          <ScrollIcon />
        </div>
      </div>
    </div>
  );
};

export default Landing;
