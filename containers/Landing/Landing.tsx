import {
  Section,
  InnerContainer,
  ScrollContainer,
  HeadingContainer,
} from './styled';
import { Header } from '../../components/Header/Header';
import ScrollIcon from '../../components/ScrollIcon/ScrollIcon';
import Image from 'next/image';

const Landing = () => {
  return (
    <Section>
      <InnerContainer>
        <HeadingContainer className='container'>
          <Header
            className='landing__header'
            fontSize={'clamp(3.39rem, calc(0.55rem + 11.39vw), 14.21rem)'}
            textAlign={'center'}
            headingLevel={'h1'}>
            <span>CREATIVE</span> IDEAS OUT OF THIS <span>WORLD</span>
          </Header>
{/* 
          <div className='landing__img-cont'>
            <Image
              className={'landing__ufo'}
              src='/images/ufo.png'
              alt='ufo'
              layout='fill'
              objectFit='contain'
            />
          </div>

          <div className='landing__img-cont'>
            <Image
              className={'landing__ufo'}
              src='/images/star-1.png'
              alt='ufo'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className='landing__img-cont'>
            <Image
              className={'landing__ufo'}
              src='/images/globe.png'
              alt='ufo'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className='landing__img-cont'>
            <Image
              className={'landing__ufo'}
              src='/images/astronaut.png'
              alt='ufo'
              layout='fill'
              objectFit='contain'
            />
          </div> */}
 
        </HeadingContainer>
        <ScrollContainer className='landing__scroll'>
            <ScrollIcon />
          </ScrollContainer>
      </InnerContainer>
    </Section>
  );
};

export default Landing;
