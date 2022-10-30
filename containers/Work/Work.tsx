import React from 'react';
import Image from 'next/image';
import styles from '@/styles/work.module.css';
import Link from 'next/link';
import Batch from '@/animations/Batch';
import { Response } from '../../typings';

interface Props {
  response: Response;
}

const Work = ({ response: response }: Props) => {
  return (
    <Batch>
      <div className={styles['grid-cont']}>
        {response?.data?.map(({ title, image, id, brand }) => {
          const { url, name } = image;

          return (
            <div key={id} id='batch-wrap'>
              <Link href={`/ads/${id}`}>
                <div className={styles['img-cont']}>
                  <Image
                    key={id}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}` + url}
                    alt={name}
                    layout='fill'
                    className={styles.img}
                  />
                </div>
              </Link>
              <div className={styles['desc-cont']}>
                <p>{brand}</p>
                <p>{title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Batch>
  );
};

export default Work;
