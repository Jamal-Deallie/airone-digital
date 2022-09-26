import { Header } from '../../components/Header/Header';
import { InnerContainer } from './styled';

const Showreel = () => {
  return (
    <section className="bg-primary">
      <InnerContainer>
        <div className='vid-cont-height'>
          <video autoPlay loop muted id='video' data-speed='auto'>
            <source src='/video/showreel.mp4' type='video/mp4' />
          </video>
        </div>
      </InnerContainer>
    </section>
  );
};

export default Showreel;
