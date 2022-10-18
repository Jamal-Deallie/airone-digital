import styled from 'styled-components';

type Props = { reverse?: boolean };

export const InnerContainer = styled.div`
  padding: var(--space-2xl-3xl) var(--space-2xxl) 0;

  .header-inner:nth-of-type(1) {
    margin-top: var(--space-xl);
  }

  .header-inner {
    max-width: max-content;
    margin-inline: auto;
    position: relative;

    h2 {
      font-size: clamp(2.33rem, calc(0.85rem + 7.43vw), 9.77rem);
      line-height: 1;
      text-align: center;
    }
  }

  .header-inner__star {
    display: grid;
    margin-bottom: -2vh;
    margin-left: -1.75vw;
    max-width: max-content;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    rotate: -30deg;
    svg:nth-of-type(1) {
      grid-row: 1;
      grid-column: 2;
    }
    svg:nth-of-type(2) {
      grid-row: 2;
    }
  }
  .header-inner__bottom {
    width: 2rem;
    background: #fff;
    display: inline-block;
    position: absolute;
    right: 0;
  }
`;
export const GridContainer = styled.div`
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (max-width: 800px) {
    /* grid-template-columns: none;
    grid-template-rows: 1fr 1fr; */
  }
`;

export const ImageContainer = styled.div`
  height: 80vh;
  position: relative;
  overflow: hidden;
  .img-cont {
    /* margin-bottom: -15vh; */
    height: 80vh;
    width: 100%;
    position: absolute;

    /* margin-inline: auto;

    aspect-ratio: 700/1120;
    height: auto;
    order: ${(props: Props) => (props.reverse === true ? 1 : 2)}; */
  }

  .img-cont__img {
    bottom: 0;
    scale: 1.3;
    filter: grayscale(100%);
  }
`;

export const DescContainer = styled.div`


  text-align: right;
  .desc-cont__name {
    font-size: 2.9rem;
    font-weight: 600;
    line-height: 1;
  }

  .desc-cont__title {
    font-size: 1.6rem;
    line-height: 1;
    font-family: ${props => props.theme.fontFamily.body};
    color: ${props => props.theme.colors.secondary};
  }
`;

export const HeaderContainer = styled.div`
  margin-inline: auto;
  position: relative;
  .header-cont__subheader {
    text-align: center;
    width: 30ch;
    margin-inline: auto;
    font-size: 1.6rem;
  }
`;

export const ContactContainer = styled.div`
  padding: var(--space-2xl-3xl) 0;
  max-width: max-content;
  margin-inline: auto;
  .contact-cont__subheader {
    font-size: 2.4rem;
    text-align: center;
    max-width: 35vw;
    margin-inline: auto;
    -webkit-font-smoothing: subpixel-antialiased;
    text-transform: uppercase;
    font-weight: 500;
  }

  .contact-cont__email {
    margin: var(--space-2xl-3xl) 0;
    font-size: clamp(2.33rem, calc(0.85rem + 7.43vw), 9.77rem);
    line-height: 1;
    margin-inline: auto;
    text-align: center;
    -webkit-font-smoothing: subpixel-antialiased;
  }
  .contact-cont__text {
    font-size: 1.6rem;
    line-height: 1;
    margin-inline: auto;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const HeaderLarge = styled.div`
  max-width: max-content;
  margin-inline: auto;
  h1 {
    font-size: clamp(1.14rem, calc(-9.97rem + 44.45vw), 43.37rem);
    line-height: 0.85;
    text-align: center;
  }
.star__wrap{

}
  .header-inner__star {
    max-width: max-content;
    float: right;
    margin-top: -5.25vh;
    margin-right: -1vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    rotate: 100deg;

    div:nth-of-type(1) {
      grid-row: 1;
      grid-column: 2;

    }
    div:nth-of-type(2) {
      grid-row: 2;

    }
   div:nth-of-type(3) {
      grid-row: 3;
      grid-column: 2;
    }
  }
`;
