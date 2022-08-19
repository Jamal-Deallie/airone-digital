import styled from 'styled-components';
export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .hero_subheader {
    position: relative;
    color: red;
    font-size: 3.2rem;
  }
  .mouse-icon {
    margin-top: 5rem;
    position: relative;
  }
`;

export const HeroContent = styled.div`
  position: relative;

  width: 100%;
  p {
    font-weight: 400;
    font-size: 32px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
    color: #000000;
    font-family: headline;
  }
`;

export const IntroContainer = styled.div`
  position: relative;
  max-width: 120rem;
  margin: '0 auto';
  p {
    line-height: 1;
    font-weight: 400;
    font-size: clamp(3.52rem, calc(1.68rem + 9.18vw), 12.7rem);
    font-family: Headline, sans-serif;
    text-align: center;
    color: ${props => props.theme.variant.primary};
  }
`;
