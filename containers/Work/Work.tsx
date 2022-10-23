// @ts-nocheck
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/work.module.css';
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
    <div>
      <div className='mb-xl'>
        <div>
          <div>
          <h1 className='heading-lrg'>Our</h1>
          </div>
        </div>
        <div className='flx'>
          <h1 className='mr-lft heading-lrg'>Work</h1>
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
