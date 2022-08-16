import { useEffect, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SmootherContext } from '../../Context/ SmootherContext';
import { HeroSection, HeroContent } from './styles';

export default function HeroContainer() {
  const smoother = useContext(SmootherContext);

  useEffect(() => {
    gsap.set('#hero-heading', {
      yPercent: -150,
      opacity: 1,
    });
  }, []);

  return (
    <HeroSection>
      <HeroContent aria-hidden='true' id='hero-heading'>
        <p>AIRONE</p>
        <div className='text-container'>
          <p>Digital</p>
          <p data-speed='0.95'>Digital</p>
          <p data-speed='0.9'>Digital</p>
          <p data-speed='0.85'>Digital</p>
          <p data-speed='0.8'>Digital</p>
          <p data-speed='0.75'>Digital</p>
          <p data-speed='0.7'>Digital</p>
        </div>
      </HeroContent>
    </HeroSection>
  );
}
