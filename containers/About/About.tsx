import styles from '../../styles/about.module.css';
import Image from 'next/image';
type Props = {};

const About = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles['heading-outer']}>
        {/* <div className={styles['star-top']}>
          <Image
            alt='brand-identity'
            src={'/images/star-1.png'}
            layout='fill'
            objectFit='cover'
            quality={100}
          />
        </div> */}

        <div className={styles['heading-cont']}>
          <h2>We don’t care just about design. We care about you.</h2>
        </div>
{/* 
        <div className={styles['star-bottom']}>
          <Image
            alt='brand-identity'
            src={'/images/star-9.png'}
            layout='fill'
            objectFit='cover'
            quality={100}
          />
        </div> */}
      </div>
      <div className={styles['text-cont']}>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit
          aliquet elit, eget tincidunt nibh pulvinar a.Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae
        </p>
      </div>
    </div>
  );
};

export default About;
