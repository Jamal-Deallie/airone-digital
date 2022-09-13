import React from 'react';
import { Header } from '../../components/Header/Header';
import { InnerContainer, HeaderContainer } from './styled';
import Link from 'next/link';
type Props = {};

const Contact = (props: Props) => {
  return (
    <section className='section bg-primary'>
      <div className='container'>
        <HeaderContainer>
          <Header
            color='secondary'
            fontSize={'clamp(2.33rem, calc(0.85rem + 7.43vw), 9.77rem)'}
            textAlign={'center'}
            headingLevel={'h2'}
            lineHeight={0.9}>
            Heard
          </Header>
          <Header
            color='secondary'
            fontSize={'clamp(2.33rem, calc(0.85rem + 7.43vw), 9.77rem)'}
            textAlign={'center'}
            headingLevel={'h2'}
            lineHeight={0.9}>
            Enough
          </Header>
        </HeaderContainer>

        <InnerContainer>
          <Link href='/contact'>
            <a>
              <Header
                color='secondary'
                fontSize={'clamp(3.39rem, calc(0.55rem + 11.39vw), 14.21rem)'}
                textAlign={'center'}
                headingLevel={'h1'}
                lineHeight={0.9}>
                Contact Us
              </Header>
            </a>
          </Link>
        </InnerContainer>
      </div>
    </section>
  );
};

export default Contact;
