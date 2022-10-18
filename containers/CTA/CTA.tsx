import React from 'react';
import { Header } from '../../components/Header/Header';
import { InnerContainer, HeaderContainer } from './styled';
import Link from 'next/link';
import StarOne from '../../svgs/StarOne';
import StarTwo from '../../svgs/StarTwo';
import StarDiamond from '../../svgs/StarDiamond';
import StarCircle from '../../svgs/StarCircle';
import styles from '../../styles/cta.module.css';
import Image from 'next/image';

type Props = {};

const CTA = (props: Props) => {
  return (
    <div className='container primary-bg'>
      <div>
        <h1 className={styles.heading}>Heard</h1>
        <h1 className={styles.heading}>Enough</h1>
      </div>

      <div className={styles['inner-cont']}>
        <h1 className={styles['heading-lrg']}>Follow Us</h1>
      </div>

      <div className={styles['link-cont']}>
        <Link href='/'>
          <a>DRIBBLE</a>
        </Link>
        <p>
          <StarTwo newHeight={10} />
        </p>
        <Link href='/'>
          <a>INSTAGRAM</a>
        </Link>
        <p>
          <StarTwo newHeight={10} />
        </p>
        <Link href='/'>
          <a>BEHANCE</a>
        </Link>
        <p>
          <StarTwo newHeight={10} />
        </p>
        <Link href='/'>
          <a>TIK TOK</a>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
