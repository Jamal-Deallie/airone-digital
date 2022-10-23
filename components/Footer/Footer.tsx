import { useMemo, ReactNode } from 'react';
import Link from 'next/link';
import StarOne from '../../svgs/StarOne';
import StarTwo from '../../svgs/StarOne';
import StarDiamond from '../../svgs/StarDiamond';
import StarCircle from '../../svgs/StarCircle';
import styles from '../../styles/footer.module.css';

type FooterProps = {
  children: ReactNode;
};

export const Footer = () => {
  const currYear = useMemo(() => {
    let dt = new Date();
    let my_time = dt.getFullYear();
    return my_time;
  }, []);

  return (
    <>
      <div className={styles.line} id='line'></div>
      <footer className={styles['footer-cont']}>
        <div className={styles['heading-cont']}>
          <StarOne newHeight={15} />
          <h3 className={styles.heading}>AirOne Digital</h3>
          <div>

          <StarOne newHeight={15} />
          </div>
        </div>
        <div className={styles['flx-cont']}>
          <div className={styles['flx-item']}>
            <div>
              <p>
                Feed your curiosity. Subscribe to our newsletter for industry
                trends, culture and more.
              </p>
            </div>
          </div>

          <div className={styles['flx-item']}>
            <div className={styles['flx-col']}>
              <ul>
                <li>123 Main Street</li>
                <li>Dallas, TX 75202</li>
                <li>123-123-4567</li>
                <li>Questions@airone.com</li>
              </ul>
            </div>

            <div className={styles['flx-col']}>
              <Link href='about'>
                <a className='links'>About</a>
              </Link>
              <Link href='team'>
                <a className='links'>Team</a>
              </Link>
              <Link href='work'>
                <a className='links'>Work</a>
              </Link>
              <Link href='contact'>
                <a className='links'>Contact</a>
              </Link>
            </div>

            <div className={styles['flx-col']}>
              <Link href='instagram.com'>
                <a className='links'>Instagram</a>
              </Link>
              <Link href='instagram.com'>
                <a className='links'>Pinterest</a>
              </Link>
              <Link href='instagram.com'>
                <a className='links'>Tik Tok</a>
              </Link>
              <Link href='instagram.com'>
                <a className='links'>Facebook</a>
              </Link>
              <Link href='instagram.com'>
                <a className='links'>Behance</a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
    // <FooterSection className='bg-primary'>
    //   <FooterGrid className='footer__container'>
    //     <div className='footer__flex-cont'>
    //       <ul className='footer-body'>
    //         <li>AirOne Digital</li>
    //         <li>123 Main Street</li>
    //         <li>Dallas, TX 75202</li>
    //         <li>123-123-4567</li>
    //         <li>questions@airone.com</li>
    //       </ul>
    //     </div>
    //     <div className='footer__flex-cont'>
    //       <Link href='about'>
    //         <a className='links'>About</a>
    //       </Link>
    //       <Link href='team'>
    //         <a className='links'>Team</a>
    //       </Link>
    //       <Link href='work'>
    //         <a className='links'>Work</a>
    //       </Link>
    //     </div>
    //     <div className='footer__flex-cont'>
    //       <Link href='contact'>
    //         <a className='links'>Contact</a>
    //       </Link>
    //       <Link href='/'>
    //         <a className='links'>Privacy Policy</a>
    //       </Link>
    //       <Link href='instagram.com'>
    //         <a className='links'>Follow Us</a>
    //       </Link>
    //     </div>
    //   </FooterGrid>
    //   <HeaderContainer>
    //     <div className='inner-div'>
    //       <div className='star-wrap-l'>
    //         <div>
    //           <StarOne newHeight={24} />
    //         </div>
    //       </div>
    //       <h1 className='lrg-primary'>AirOne</h1>
    //       <div className='star-wrap-r'>
    //         <div>
    //           <StarOne newHeight={24} />
    //         </div>
    //       </div>
    //     </div>
    //   </HeaderContainer>
    //   <BottomContainer>
    //     <BodyText
    //       fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)'
    //       textAlign='center'>
    //       © {currYear} Airone Digital
    //     </BodyText>
    //   </BottomContainer>
    // </FooterSection>
  );
};
