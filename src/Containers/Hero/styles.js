import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  padding-top: calc(10rem + 5%);
  height: calc(100vh - 10rem);
  overflow: visible;
  width: 100%;
`;

export const HeroContent = styled.div`
  background-color: 'aqua';
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  p {
    font-family: ${props => props.theme.fontFamily.heading};
    font-size: clamp(12px, 15.5vw, 250px);
    text-align: center;
    line-height: 0.67;
    margin: 0;
    text-align: center;
    color: ${props => props.theme.variant.secondary};
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: ${props => props.theme.variant.primary};
    z-index: -10;
  }
  p:nth-of-type(1) {
    margin-bottom: 1rem;
  }
  .text-container {
    display: block;
    position: relative;
  }

  .text-container p {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    color: transparent;
  }

  .text-container p:nth-of-type(1) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    color: ${props => props.theme.variant.primary};
  }
`;
