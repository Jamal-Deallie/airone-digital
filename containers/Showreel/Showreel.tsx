import { Header } from '../../components/Header/Header';
import { InnerContainer } from './styled';
type Props = {};

const Showreel = (props: Props) => {
  return (
    <section className='color_changer section' data-color='#A682FA'>
      <div className='container'>
        <InnerContainer>
          <div className='reel__flex'>
            <div className='reel__vid-cont'>
              <video autoPlay loop muted id='video'>
                <source src='/video/showreel.mp4' type='video/mp4' />
              </video>
            </div>
            <div className='reel_heading-line'>
              <Header
                className='color_changer-text'
                fontSize={'clamp(2.33rem, calc(0.85rem + 7.43vw), 19.77rem)'}
                headingLevel={'h1'}>
                We
              </Header>

              <Header
                className='color_changer-text'
                fontSize={'clamp(2.33rem, calc(0.85rem + 7.43vw), 9.77rem)'}
                headingLevel={'h1'}
                lineHeight={0.9}>
                Think
              </Header>
            </div>
          </div>
        </InnerContainer>
        <div>
          <Header
            className='color_changer-text'
            fontSize={'clamp(1.14rem, calc(-9.97rem + 44.45vw), 43.37rem)'}
            lineHeight={0.9}>
            BIG
          </Header>
        </div>
      </div>
    </section>
  );
};

export default Showreel;
