import styled from 'styled-components';

export const InnerContainer = styled.div`
  position: relative;
  max-width: 45vw;
  min-width: 35rem;
  padding-inline: var(--space-2xxl);
  .lines {
    font-size: clamp(2.33rem, calc(1.39rem + 4.7vw), 8rem);
    line-height: 1;
  }
  .about__text {
    margin-top: var(--space-xl);
    max-width: 50rem;
  }
`;

export const HeaderContainer = styled.div`
  .about__header > *,
  .about__header {
    font-size: clamp(2.33rem, calc(1.39rem + 4.7vw), 8rem);
    line-height: 1;
    ${props => props.theme.fontFamily.heading};
    color: ${props => props.theme.colors.primary};
  }
  .about__header::before {
    display: block;
    position: absolute;
    height: 8vh;
    width: auto;
    margin-left: 0;
    margin-top: -8vh;
    z-index: -1;
    content: '';
    background: url(images/star-2.svg) no-repeat 0 0;
    background-size: 8vh auto;

    aspect-ratio: 1;
  }

  span::after {
    display: inline-block;
    position: absolute;
    height: 10vh;
    width: auto;
    margin-top: 2vh;
    z-index: -1;
    content: '';
    background: url(images/star-1.svg) no-repeat 0 0;
    background-size: 5vh auto;

    aspect-ratio: 1;
  }
`;
