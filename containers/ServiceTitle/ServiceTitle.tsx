import { InnerContainer } from './styled';
import Image from 'next/image';
import ColorChange from '../../animations/ColorChange';
import ScaleUp from '../../animations/ScaleUp';
const ServiceTitle = () => {
  return (
    <ColorChange bgColor='#AC7EF3' ftColor={'#1A1B1D'} ftTarget={'.reel--text'}>
      <InnerContainer>
        <div className='service__img-cont'>
          <Image alt='' src='/images/star-7.svg' layout='fill' />
        </div>
        <div className='reel_heading-line'>
          <h1 className='reel--text'>We</h1>
          <h1 className='reel--text'>Think</h1>
          {/* <ScaleUp txtTarget={'.reel--lrg'}> */}
          <h1 className='reel--lrg reel--text'>BIG</h1>
          {/* </ScaleUp> */}
        </div>
        <div className='service--wrap'>
          <div className='service__star-cont'>
            <Image
              alt=''
              src='/images/star-6.svg'
              layout='fill'
              className='service--star'
            />
          </div>
        </div>
      </InnerContainer>
    </ColorChange>
  );
};

export default ServiceTitle;
