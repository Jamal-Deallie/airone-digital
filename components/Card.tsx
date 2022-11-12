import Image from 'next/image';
import styles from '@/styles/components/card.module.scss';
import Link from 'next/link';


interface CardProps {
  title: string;
  image?: string;
  image_width: string;
  image_height: string;
  brand: string;
  slug: string;
}
const Card = ({ title, image, brand, slug }: CardProps) => {
  return (
    <div id='batch-wrap'>
      <Link href={`/advertisements/${slug}`}>
        <div className={styles.container}>
          <Image
            src={image}
            alt={title}
            layout='fill'
            className={styles.img}
          />
        </div>
      </Link>
      <div className={styles.desc}>
        <p>{brand}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
