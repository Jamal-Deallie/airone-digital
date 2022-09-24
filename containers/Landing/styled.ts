import styled from '@emotion/styled'

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
    background: url(images/star-1.png) no-repeat 0 0;
    background-size: 5vh auto;
    aspect-ratio: 812/345;
  }

  .landing__header > span:nth-of-type(1)::after {
    display: inline-block;
    position: absolute;
    height: 6vh;
    width: auto;
    /* margin-right: -3vh; */
    content: '';
    background: url(images/astronaut.png) no-repeat 0 0;
    background-size: 6vh auto;
    aspect-ratio: 1;
  }
  .landing__header > span:nth-of-type(2)::before {
    display: block;
    position: absolute;
    height: 8vh;
    width: auto;
    margin-left: 4rem;
    z-index: -1;
    content: '';
    background: url(images/globe.png) no-repeat 0 0;
    background-size: 8vh auto;

    aspect-ratio: 1;
  }

  .landing__header > span:nth-of-type(3)::after {
    display: inline-block;
    position: absolute;
    height: 15vh;
    width: auto;
    margin-left: -3vh;
    rotate: 25deg;
    content: '';
    background: url(images/ufo.png) no-repeat 0 0;
    background-size: 15vh auto;
    aspect-ratio: 1;
    text-shadow: 10px 10px 10px rgba(0,0,0,0.3);
  }
`;