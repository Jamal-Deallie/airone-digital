// @ts-nocheck
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/containers/work.module.css';
import StarOne from '../../svgs/StarOne';
import StarTwo from '../../svgs/StarOne';
import StarDiamond from '../../svgs/StarDiamond';
import StarCircle from '../../svgs/StarCircle';

type WorkProps = {
  results: any[];
};

const Work = ({ results }: WorkProps) => {
  const { data } = results;
  console.log(data);

  return (
    <div className='container primary-bg'>
      <div className='heading-lrg mb-xl'>
        <div className={styles['star-cont']}>
          <div className={styles.star} id='svg'>
            <StarOne newHeight={25} />
          </div>
          <div className={styles.star} id='svg'>
            <StarTwo newHeight={15} />
          </div>
          <div>
            <h1>Our</h1>
          </div>
        </div>
        <div className='flx'>
          <h1 className='mr-lft'>Work</h1>
          <div className={styles.star} id='svg'>
            <StarCircle newHeight={15} />
          </div>
          <div className={styles.star} id='svg'>
            <StarTwo newHeight={20} />
          </div>
        </div>
      </div>
      <div className={styles['grid-cont']}>
        {data.map(({ id, attributes }) => {
          const { title } = attributes;
          const { url, height, width, name } = attributes.image.data.attributes;
          console.log(attributes);

          return url === null ? (
            <div key={id} className='client name__cont'>
              <h3>{name}</h3>
            </div>
          ) : (
            <div>
              <div className={styles['img-cont']}>
                <Image
                  key={id}
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}` + url}
                  alt={name}
                  layout='fill'
                  className={styles.img}
                />
              </div>
              <div className={styles['desc-cont']}>
                <p>Brand</p>
                <p>{title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
