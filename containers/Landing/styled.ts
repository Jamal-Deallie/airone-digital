import styled from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  position: relative;
  width: 100%;
`;

export const InnerContainer = styled.div`
  position: relative;
  max-width: 120rem;
  margin-inline: auto;
  padding-top: var(--space-2xl);
`;

export const ScrollContainer = styled.div`
  padding-top: var(--space-m);
  width: 40px;
  height: 70px;
  margin-inline: auto;
  position: relative;
`;

export const HeadingContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  .landing__header {
    height: max-content;
    width: 100%;
  }

  .landing__header > span {
    font-size: clamp(3.39rem, calc(0.55rem + 11.39vw), 14.21rem);
  }

  .landing__header > span:nth-of-type(1)::before {
    display: inline-block;
    position: absolute;
    height: 5vh;
    width: auto;
    margin-right: 3vh;
    content: '';
    background: url(images/ufo.png) no-repeat 0 0;
    background-size: 10vh auto;
    aspect-ratio: 812/345;
  }

  .landing__img-cont:nth-of-type(1) {
    height: 4vh;
    width: auto;
    aspect-ratio: 812/345;
    position: absolute;
    grid-column: 8 / span 1;
    grid-row: 4 / span 1;
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
