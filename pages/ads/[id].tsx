import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import useSwr from 'swr';
import { fetcher } from '../api/api.js';
import styles from '@/styles/ad.module.css';
import Image from 'next/image';
import { Adverts } from '../../typings';

type Props = {
  adverts: Adverts[];
  id: number;
};

const Ads = () => {
  const { query } = useRouter();
  const { data, error } = useSwr<Adverts>(
    () =>
      query.id &&
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/advertisements/${query.id}?populate=*`,
    fetcher
  );
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;


  const { desc, title, image } = data as Adverts;

  const { width, name, url, height } = image;

  return (
    <div className='primary-bg min-height'>
      <div className='container'>
        <div className='pt-xl'>
          <div className={styles['grid-cont']}>
            <div className={styles['content']}>
              <div className={styles['inner']}>
                <h1 className='fs-smooth '>{title}</h1>
                <p className='mt-m fz-m'>{desc}</p>
              </div>
            </div>
            <div className={styles.wrap}>
              <div className={styles['img-cont']}>
                <Image
                  className={styles['img']}
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}` + url}
                  alt={name}
                  layout='responsive'
                  width={`${width}`}
                  height={`${height}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/advertisements?`
  );
  const arr = await res.json();

  const { data } = arr;

  const paths = data.map((d: Props) => {
    return {
      params: { id: d.id },
    };
  });

  return { paths, fallback: false };
};

export default Ads;
