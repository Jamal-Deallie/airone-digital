import { useMemo, ReactNode } from 'react';
import {
  FooterGrid,
  HeaderContainer,
  FooterSection,
  BottomContainer,
} from './styled';
import { Header } from '../Header/Header';
import Link from 'next/link';
import BodyText from '../BodyText/BodyText';

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
    <FooterSection className='bg-primary'>
      <FooterGrid className='footer__container'>
        <div className='footer__flex-cont'>
          <BodyText fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)'>
            AirOne Digital
          </BodyText>
          <BodyText fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)'>
            123 Main Street
          </BodyText>
          <BodyText fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)'>
            Dallas, TX 75202
          </BodyText>
          <BodyText fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)'>
            P: 123-123-4567
          </BodyText>
          <BodyText fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)'>
            E: questions@airone.com
          </BodyText>
        </div>
        <div className='footer__flex-cont'>
          <Link href='about'>
            <a>
              <BodyText fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)'>
                About
              </BodyText>
            </a>
          </Link>
          <Link href='team'>
            <a>
              <BodyText fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)'>
                Team
              </BodyText>
            </a>
          </Link>
          <Link href='about'>
            <a>
              <BodyText fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)'>
                Work
              </BodyText>
            </a>
          </Link>
        </div>
        <div className='footer__flex-cont'>
          <Link href='contact'>
            <a>
              <BodyText fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)'>
                Contact
              </BodyText>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <BodyText fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)'>
                Privacy Policy
              </BodyText>
            </a>
          </Link>
          <Link href='instagram.com'>
            <a>
              <BodyText fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)'>
                Follow Us
              </BodyText>
            </a>
          </Link>
        </div>
      </FooterGrid>
      <HeaderContainer>
        <Header
          color='secondary'
          textAlign='center'
          fontSize={'clamp(2.98rem, calc(-3.54rem + 26.08vw), 27.76rem)'}
          lineHeight={1}>
          AirOne
        </Header>
      </HeaderContainer>
      <BottomContainer>
        <BodyText fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)' textAlign='center'>
          © {currYear} Airone Digital
        </BodyText>
      </BottomContainer>
    </FooterSection>
  );
};
