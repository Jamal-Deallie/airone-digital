import {
  InnerContainer,
  GridContainer,
  DescContainer,
  LeftCol,
  RightCol,
} from './styled';
import { Header } from '../../components/Header/Header';
import Image from 'next/image';
import data from '../../shared/services.json';
import BodyText from '../../components/BodyText/BodyText';

export type ServiceData = typeof data;

const Services = () => {
  return (
    <section className='bg-primary'>
      <GridContainer>
        <LeftCol>
          <div>
            <div className='service__num-cont'>
              <h3 className='service--num'>01</h3>
            </div>
            <p className='service__info'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className='parallax__wrap'>
            <div className='services__img-wrap' data-speed='auto'>
              <Image
                alt='brand-identity'
                src={'/images/tropulis.png'}
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
          </div>
        </LeftCol>

        <RightCol>
          <div className='inner-cont'>
            <div className='service__num-cont'>
              <h3 className='service--num'>02</h3>
            </div>
            <div>
              <div className='parallax__wrap'>
                <div className='services__img-wrap' data-speed='auto'>
                  <Image
                    alt='brand-identity'
                    src={'/images/disney.jpeg'}
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                  />
                </div>
              </div>
              <p className='service__info'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </RightCol>
      </GridContainer>
    </section>
  );
};

export default Services;
