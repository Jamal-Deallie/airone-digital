import styled from 'styled-components';

export const Section = styled.section`
  height: 100vh;
`;

export const InnerContainer = styled.div`
  position: relative;
  max-width: 120rem;
  margin-inline: auto;
  padding-inline: var(--space-m);
  padding-top: var(--space-2xl);
`;

export const ScrollContainer = styled.div`
  margin-top: var(--space-xl);
  z-index: 1;
  position: relative;
`;

export const HeadingContainer = styled.div`
  z-index: 1;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  h1 {
    grid-column: 1 / span 3;
    grid-row: 1 / span 3;
  }
  .landing__img-cont:nth-of-type(1) {
    width: 9vw;
    aspect-ratio: 812/345;
    position: relative;
    right: -12vw;
    bottom: -5vh;
    rotate: 15deg;
    grid-column: 3 / span 1;
    grid-row: 3 / span 1;
    @media only screen and (max-width: 600px) {
      right: -5vw;
      bottom: -5vh;
      width: 17vw;
    }
  }
  .landing__img-cont:nth-of-type(2) {
    width: 5vw;
    aspect-ratio: 337/270;
    position: relative;
    left: 6.5vw;
    top: 5vh;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    @media only screen and (max-width: 600px) {
      left: 1vw;
      top: 3vh;
      width: 7vw;
    }
  }
  .landing__img-cont:nth-of-type(3) {
    width: 5vw;
    aspect-ratio: 1/1;
    position: relative;
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
    bottom: -5vh;
    @media only screen and (max-width: 600px) {
      left: 5vw;
      bottom: -3vh;
      width: 10vw;
    }
  }
  .landing__img-cont:nth-of-type(4) {
    width: 5vw;
    aspect-ratio: 1/1;
    position: relative;
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
    right: -10vw;
    @media only screen and (max-width: 600px) {
      right: -20vw;
      top: 0;
      width: 12vw;
    }
  }
`;
