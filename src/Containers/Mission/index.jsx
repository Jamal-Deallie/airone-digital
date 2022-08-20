import { useLayoutEffect, useRef } from 'react';
import { MissionSection, InnerContainer } from './styles';

export default function MissionContainer() {
  const el = useRef();

  useLayoutEffect(() => {}, []);

  return (
    <MissionSection ref={el}>
      <InnerContainer className='mission-inner'>
        <img
          className='cloud-left'
          src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1660893741/air_one/cloud-left_qctnnl.png'
          alt=''
        />
        <img
          className='cloud-right'
          src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1660893741/air_one/cloud-right_vnlyiw.png'
          alt=''
        />
        <p className='mission-desc gradient-subheader'>
          We shoot to the starts, so you can land on the clouds
        </p>
      </InnerContainer>
    </MissionSection>
  );
}
