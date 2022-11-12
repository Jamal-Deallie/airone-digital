import { useEffect, useRef } from 'react';
import styles from '@/styles/containers/about.module.scss';
import SplitTimeline from '@/animations/SplitTimeline';
import SplitHeading from '@/animations/SplitHeading';
import SplitBody from '@/animations/SplitBody';
import cn from 'classnames';

const About = () => {
  return (
    <SplitHeading>
      <SplitBody>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h2 id='heading'>
              We don’t care just about design. We care about you.
            </h2>
          </div>

          <div className={styles.desc} id='fullscreen'>
            <p id='split-body' className='fullscreen'>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Vivamus suscipit tortor eget felis porttitor volutpat. Mauris
              blandit aliquet elit, eget tincidunt nibh pulvinar a.Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia Curae
            </p>
          </div>
        </div>
      </SplitBody>
    </SplitHeading>
  );
};

export default About;
