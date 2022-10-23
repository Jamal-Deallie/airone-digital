import styles from '@/styles/showreel.module.css';

const Showreel = () => {
  return (
    <section className='bg-primary'>
      <div className={styles['inner-cont']}>
        <video className={styles['vid']} autoPlay loop muted id='video'>
          <source src='/video/showreel.mp4' type='video/mp4' />
        </video>
      </div>
    </section>
  );
};

export default Showreel;
