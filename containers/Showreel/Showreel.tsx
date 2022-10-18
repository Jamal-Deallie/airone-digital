import { Header } from '../../components/Header/Header';
import { InnerContainer } from './styled';

const Showreel = () => {
  return (
    <section className='bg-primary'>
      <InnerContainer>
        <video className='showreel-vid' autoPlay loop muted id='video'>
          <source src='/video/showreel.mp4' type='video/mp4' />
        </video>
      </InnerContainer>
    </section>
  );
};

export default Showreel;
