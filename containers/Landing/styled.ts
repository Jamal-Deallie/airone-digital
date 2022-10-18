import styled from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  position: relative;
  width: 100%;
  padding-top: var(--space-3xl);
`;

export const InnerContainer = styled.div`
  position: relative;
  max-width: 120rem;
  margin-inline: auto;
  padding-top: var(--space-3xl);
  padding-inline: var(--space-2xxl);
  .heading-container {
    width: 100%;
    height: auto;
    position: relative;
    .landing--header {
      color: ${props => props.theme.colors.primary};
      height: max-content;
      width: 100%;
      font-size: clamp(3.39rem, calc(0.55rem + 11.39vw), 14.21rem);
      text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
      text-align: center;
    }

    .landing--header > span {
      font-size: clamp(3.39rem, calc(0.55rem + 11.39vw), 14.21rem);
    }

    /* .landing--header > span:nth-of-type(1)::before {
      display: inline-block;
      position: absolute;
      height: 5vh;
      width: auto;
      margin-right: 3vh;
      content: '';
      background: url(images/star-1.png) no-repeat 0 0;
      background-size: 5vh auto;
      aspect-ratio: 812/345;
    } */

    /* .landing--header > span:nth-of-type(1)::after {
      display: inline-block;
      position: absolute;
      height: 6vh;
      width: auto;
      /* margin-right: -3vh; 
      content: '';
      background: url(images/astronaut.png) no-repeat 0 0;
      background-size: 6vh auto;
      aspect-ratio: 1;
    } */

    /* .landing--header > span:nth-of-type(2)::before {
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
    } */

    /* .landing--header > span:nth-of-type(3)::after {
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
      text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
    } */
  }
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
  .landing--header {
    height: max-content;
    width: 100%;
    font-size: clamp(3.39rem, calc(0.55rem + 11.39vw), 14.21rem);
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  }

  .landing--header > span {
    font-size: clamp(3.39rem, calc(0.55rem + 11.39vw), 14.21rem);
  }

  .landing--header > span:nth-of-type(1)::before {
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

  .landing--header > span:nth-of-type(1)::after {
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
  .landing--header > span:nth-of-type(2)::before {
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

  .landing--header > span:nth-of-type(3)::after {
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
    text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  }
`;
