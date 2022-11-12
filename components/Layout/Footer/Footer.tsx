import { useMemo, ReactNode } from 'react';
import Link from 'next/link';
import StarOne from '@/svgs/StarOne';
import styles from '@/styles/components/footer.module.scss';

type FooterProps = {
  children: ReactNode;
};

const Footer = () => {
  const currYear = useMemo(() => {
    let dt = new Date();
    let my_time = dt.getFullYear();
    return my_time;
  }, []);

  return (
    <>
      <div className={styles.line} id='line'></div>
      <footer className={styles.footer}>
        <div className={styles.heading}>
          <StarOne newHeight={15} />
          <h3>AirOne Digital</h3>
          <StarOne newHeight={15} />
        </div>

        <div className={styles.flex}>
          <div className={styles.col}>
            <p>
              Feed your curiosity. Subscribe to our newsletter for industry
              trends, culture and more.
            </p>
          </div>

          <div className={styles.col}>
            <ul className={styles.location}>
              <li>123-123-4567</li>
              <li>Questions@airone.com</li>
              <li>Jobs@airone.com</li>
            </ul>
            <ul className={styles.location}>
              <li>
                <h3>Dallas</h3>
              </li>
              <li>123 Main Street</li>
              <li>Dallas, TX 75202</li>
            </ul>
            <ul className={styles.location}>
              <li>
                <h3>New York</h3>
              </li>
              <li>123 Main Street</li>
              <li>New York, 10044</li>
            </ul>

            <div className={styles.links}>
              <Link href=''>
                <a>Instagram</a>
              </Link>
              <Link href=''>
                <a>Pinterest</a>
              </Link>
              <Link href=''>
                <a>Tik Tok</a>
              </Link>
              <Link href=''>
                <a>Facebook</a>
              </Link>
              <Link href=''>
                <a>Behance</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          Copyright © {currYear} Airone Digital. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
