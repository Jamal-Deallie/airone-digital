import { InnerContainer, GridContainer, DescContainer } from './styled';
import { Header } from '../../components/Header/Header';
import Image from 'next/image';
import data from '../../shared/services.json';
import BodyText from '../../components/BodyText/BodyText';
import FadeInUp from '../../animations/FadeInUp';

export type ServiceData = typeof data;

const Services = () => {
  return (
    <section className='section bg-primary'>
      <div className='container '>
        {data.map(d => {
          const { id, image, subheader, caption, reverse } = d;
          return (
            <FadeInUp key={id} duration={1} ease={'power4.in'}>
              <InnerContainer>
                <GridContainer className='service__flex-cont' reverse={reverse}>
                  <Header
                    color={'secondary'}
                    fontSize={'clamp(2.33rem, calc(1.39rem + 4.70vw), 8rem)'}
                    headingLevel={'h2'}
                    lineHeight={1}
                    textAlign='center'
                    className='service__text'>
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
                <DescContainer reverse={reverse} className='service__desc'>
                  <BodyText
                    color={'secondary'}
                    className='service__desc service__text'
                    fontSize='2.253rem'
                    textTrans='uppercase'
                    fontWeight={600}>
                    {caption}
                  </BodyText>
                </DescContainer>
              </InnerContainer>
            </FadeInUp>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
