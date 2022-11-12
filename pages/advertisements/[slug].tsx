import { useRouter } from 'next/router';
import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
  GetServerSideProps,
} from 'next';
import styles from '@/styles/containers/ad.module.scss';
import Image from 'next/image';
import { AdData } from '../../typings';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';
type Props = {
  data: AdData[];
};

const Advertisements: NextPage = ({ data }: Props) => {
  const { image, title, desc, industry, image_width, image_height } = data[0];
  console.log(image);
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className='pt-xl'>
          <div className={styles.grid}>
            <div className={styles.content}>
              <div className={styles.inner}>
                <h1 className='fs-smooth '>{title}</h1>
                <div className={styles.line} />
                <p className='mt-m fz-m'>{`Industry: ${industry}`}</p>
                <p className='mt-m fz-m'>{desc}</p>
              </div>
            </div>
            <div className={styles.wrap}>
              <div
                style={{ aspectRatio: `${image_width}/${image_height}` }}
                className={styles.img}>
                <Image
                  src={image}
                  alt={title}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  console.log(context.query.slug);
  const page = Number(context?.query?.page) || 1;
  const slug = context.query.slug;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/advertisements?populate=*&filters[slug][$eq]=${slug}`
  )
    .then(res => res.json())
    .catch(error => {
      console.error(error);
    });

  if (!response.data.length) {
    return { notFound: true };
  }
  console.log(response.data);
  return {
    props: {
      data: response.data,
    },
  };
};

export default Advertisements;
