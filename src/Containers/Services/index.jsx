import { ServiceSection, InnerContainer, } from './styles';

export default function ServicesContainer() {
  return (
    <ServiceSection>
      <h2 className='heading gradient-subheader'>Our Services Include...</h2>
      <InnerContainer>
        <div className='flex-container'>
          <div className='number'>
            <h2 className='outline'>O1</h2>
          </div>
          <div className='flex-content'>
            <h2>Advertising</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula.
            </p>
          </div>
        </div>
        <div className='flex-container'>
          <div className='flex-content'>
            <h2>Advertising</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula.
            </p>
          </div>
          <div className='number'>
            <h2 className='outline'>O2</h2>
          </div>
        </div>
        <div className='flex-container'>
          <div className='number'>
            <h2 className='outline'>O3</h2>
          </div>
          <div className='flex-content'>
            <h2>Advertising</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula.
            </p>
          </div>
        </div>
        <div className='flex-container'>
          <div className='flex-content'>
            <h2>Brand Identity</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula.
            </p>
          </div>
          <div className='number'>
            <h2 className='outline'>O4</h2>
          </div>
        </div>
      </InnerContainer>
    </ServiceSection>
  );
}
