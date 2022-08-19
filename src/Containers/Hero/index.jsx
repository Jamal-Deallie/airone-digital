import { SwipeIcon } from '../../Components';
import { HeroSection, IntroContainer } from './styles';

export default function HeroContainer() {
  return (
    <HeroSection>
      <IntroContainer className='intro'>
        <p>CREATIVE IDEAS OUT OF THIS WORLD</p>
      </IntroContainer>
      <div className='mouse-icon'>
        <SwipeIcon />
      </div>
    </HeroSection>
  );
}
