import styled from 'styled-components';

export const MainContent = styled.div`
  .stats__inner-cont:nth-child(odd) .stats__grid-cont {
    order: 2;
  }
  .stats__inner-cont:nth-child(odd) .stats__desc-cont {
    order: 1;
  }
`;

export const OuterContainer = styled.div`
  .stats__text {
    color: ${props => props.theme.colors.primary};
  }

  .stats__desc {
    font-size: 1.6rem;
    font-family: ${props => props.theme.fontFamily.body};
  }

  .stats__title {
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fontFamily.heading};
    line-height: 1.3;
    font-size: 2.42rem;
  }

  .stats__grid-cont {
    width: 100%;
    max-width: 55rem;
    padding: var(--space-m);
  }
`;

export const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: var(--space-xl) var(--space-l);
  display: flex;
  justify-items: space-between;
  align-items: center;
  gap: 2rem;


  .stats__grid-cont:nth-of-type(1) {
    width: 100%;
  }
  .stats__icon-cont:nth-of-type(1) {
    position: relative;
    aspect-ratio: 1/1;
    height: auto;
    margin-inline: auto;
  }

  .stats.cont:nth-of-type(2) {
    width: 100%;
    text-align: center;
  }


  .stats__stat {
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fontFamily.heading};
    line-height: 1;
    font-size: clamp(5.25rem, calc(3.79rem + 7.32vw), 25rem);
  }
`;

export const SubheaderContainer = styled.div`
  margin-top: var(--space-2xl);
  max-width: 65rem;
  margin-inline: auto;

  .stats__subheader {
    font-size: 2.1rem;
    text-align: center;
    max-width: 35vw;
    margin-inline: auto;
    -webkit-font-smoothing: subpixel-antialiased;
    font-weight: 400;
    color: var(--primary-variant);
  }
`;

export const StatFooterContainer = styled.div`
  padding: var(--space-2xl-3xl) 0;
  .stats__desc-cont {
    width: 100%;
    max-width: 55rem;
    padding: var(--space-m);
    margin-inline: auto;
  }

  h1 {
    font-family: 'Headline';
    font-size: clamp(1.14rem, calc(-9.97rem + 44.45vw), 36.37rem);
    line-height: 1;
    text-align: center;
  }

  .stats.desc.cont {
    width: 100%;
    max-width: 55rem;
    padding: var(--space-m);
    margin-inline: auto;
  }
`;
