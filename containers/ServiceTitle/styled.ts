import styled from 'styled-components';

export const InnerContainer = styled.div`
  padding: var(--space-2xxl) var(--space-2xxl);
  width: max-content;
  .service__img-cont {
    position: relative;
    aspect-ratio: 1;
    max-height: 6vh;
    rotate: 95deg;
    left: -4%;
    bottom: -15%;
  }

  .reel--text {
    color: ${props => props.theme.colors.secondary};
    ${props => props.theme.fontFamily.heading}
  }
  .reel--text:nth-of-type(1) {
    font-size: clamp(2.33rem, calc(0.85rem + 7.43vw), 19.77rem);
    line-height: 1;
  }
  .reel--text:nth-of-type(2) {
    font-size: clamp(2.33rem, calc(0.85rem + 7.43vw), 9.77rem);
    /* color: ${props => props.theme.colors.primary}; */
    line-height: 0.9;
    /* ${props => props.theme.fontFamily.heading} */
  }
  .reel--lrg {
    font-size: clamp(1.14rem, calc(-9.97rem + 44.45vw), 43.37rem);
    line-height: 0.9;
  }
  .service--wrap {
    width: 100%;
    position: relative;
  }
  .service__star-cont {
    position: relative;
    aspect-ratio: 1;
    max-height: 8vh;
    width: 8rem;
    left: 100%;
    margin-top: -10%;
  }

  .service--star {
    position: absolute;
    left: 10%;
    width: 8rem;
  }
`;
