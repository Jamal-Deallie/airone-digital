import styles from '../../styles/containers/serviceTitle.module.css';
import StarOne from '../../svgs/StarOne';
import StarTwo from '../../svgs/StarOne';
import StarDiamond from '../../svgs/StarDiamond';
import StarCircle from '../../svgs/StarCircle';
import ScaleSvg from '../../animations/Scale';

const ServiceTitle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.star} id='svg'>
        <StarOne newHeight={22} />
      </div>
      <div className={styles.star} id='svg'>
        <StarCircle newHeight={15} />
      </div>

      <div className={styles['text-cont']}>
        <h1 className={styles.heading}>We</h1>
        <h1 className={styles.heading}>Think</h1>
        <h1 className={styles['big-text']}>BIG</h1>
        {/* <div className={styles['star-big']}>
            <StarTwo newHeight={25} />
          </div>
          <div className={styles['star-big']}>
            <StarDiamond newHeight={22} />
          </div> */}
      </div>
    </div>
  );
};

export default ServiceTitle;
