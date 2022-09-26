import styled from 'styled-components';

type Props = { reverse?: boolean };

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: var(--space-2xl) var(--space-2xxl);
  gap: 10rem;
`;

export const LeftCol = styled.div`
  grid-column: 1 / span 1;
  .service__info {
    margin-bottom: 2rem;
    font-family: OpenSans, sans-serif;
    font-size: 1.6rem;
  }
  .service--num {
    color: ${props => props.theme.colors.secondary};
    ${props => props.theme.fontFamily.heading};
    font-size: clamp(2.33rem, calc(1.39rem + 4.7vw), 8rem);
  }
  .parallax__wrap {
    height: 60vh;
    position: relative;
    overflow: hidden;
  }
  .services__img-wrap {
    margin-bottom: -7vh;
    height: calc(60vh * 1.25);
    width: 100%;
    position: absolute;
    display: block;
    bottom: 0;
  }

  .img {
    /* position: absolute;
    bottom: 0;
    display: block; */
  }
`;

export const RightCol = styled.div`
  grid-column: 3 / span 2;
  .service__info {
    margin-top: 2rem;
    font-family: OpenSans, sans-serif;
    font-size: 1.6rem;
  }
  .inner-cont {
    display: grid;
    grid-template-columns: 17% 83%;
  }
  .parallax__wrap {
    height: 55vh;
    position: relative;
    overflow: hidden;
  }
  .services__img-wrap {
    height: calc(55vh * 1.25);
    width: 100%;
    position: absolute;
    display: block;
    bottom: 0;
  }

  .service--num {
    color: ${props => props.theme.colors.secondary};
    ${props => props.theme.fontFamily.heading};
    font-size: clamp(2.33rem, calc(1.39rem + 4.7vw), 8rem);
  }
  .img {
    /* position: absolute;
    bottom: 0;
    display: block; */
  }
`;
export const InnerContainer = styled.div<Props>`
  height: 100%;
  width: 100%;
  padding-top: var(--space-2xl);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  gap: 2rem;
  margin-inline: auto;
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    padding-top: var(--space-2xxl);
  }
  .service__flex-cont {
    width: 100%;
  }

  .services__icon-cont {
    margin-top: var(--space-m);
  }
  .services__icon-cont:nth-of-type(1) {
    position: relative;
    width: 13rem;
    height: 13rem;
    aspect-ratio: 1/1;
    height: auto;
    margin-inline: auto;
  }
  .service__desc {
    width: 100%;
    height: max-content;
    max-width: 55rem;
    padding: var(--space-m);

    .service__desc > p {
      border-left: 3px solid ${props => props.theme.colors.secondary};
      @media only screen and (max-width: 800px) {
        border-left: none;
      }
    }
  }
`;

// export const GridContainer = styled.div<Props>`
//   order: ${(props: Props) => (props.reverse === true ? 2 : 1)};
//   @media only screen and (max-width: 800px) {
//     order: 1;
//   }
// `;

export const DescContainer = styled.div<Props>`
  order: ${(props: Props) => (props.reverse === true ? 1 : 2)};
  @media only screen and (max-width: 800px) {
    order: 2;
  }
`;
