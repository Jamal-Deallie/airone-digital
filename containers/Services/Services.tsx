import { ComponentProps } from 'react';
import { InnerContainer, GridContainer, DescContainer } from './styled';
import { Header } from '../../components/Header/Header';
import BodyText from '../../components/BodyText/BodyText';
import Image from 'next/image';
import data from '../../shared/services.json';


export type ServiceData = typeof data;

const Services = () => {
  return (
    <section className='section bg-primary'>
      <div className='container'>
        {data.map(d => {
          const { id, image, subheader, caption, reverse } = d;
          return (
            <InnerContainer key={id}>
              <GridContainer className='service__flex-cont' reverse={reverse}>
                <Header
                  fontSize={'clamp(2.33rem, calc(1.39rem + 4.70vw), 8rem)'}
                  headingLevel={'h2'}
                  lineHeight={1}
                  textAlign='center'
                  className='service__text'
                  color='secondary'>
                  {subheader}
                </Header>
                <div className='services__icon-cont'>
                  <Image
                    className={'landing__ufo'}
                    src={image}
                    alt={`${subheader}-icon`}
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </GridContainer>
              <DescContainer reverse={reverse}>
                <Header
                  className='service__desc service__text'
                  fontSize='1.953rem'
                  headingLevel={'h3'}
                  color='secondary'>
                  {caption}
                </Header>
              </DescContainer>
            </InnerContainer>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
