import Image from 'next/image';
import styles from '../../styles/founder.module.css';
type Props = {};

const Founder = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Founder</h1>
      </div>
      <div className={styles.inner}>
        <div className={styles['flx-cont']}>
          <div className={styles.wrap}>
            <p>Portia Hightower</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              volutpat consequat mauris nunc congue nisi vitae. Duis ut diam
              quam nulla porttitor massa id. Nunc scelerisque viverra mauris in
              aliquam sem fringilla. Erat pellentesque adipiscing commodo elit.
              Et netus et malesuada fames ac. Et tortor at risus viverra
              adipiscing at in tellus integer.
            </p>
          </div>
          <div className={styles['img-cont']}>
            <Image
              className={styles.img}
              alt='founder'
              src={'/images/founder-01.png'}
              layout='fill'
              objectFit='cover'
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
