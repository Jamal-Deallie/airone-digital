import styled from 'styled-components';

type Props = { reverse?: boolean };

export const InnerContainer = styled.div`
  padding: var(--space-2xl-3xl) 0;
`;
export const GridContainer = styled.div`
  margin-top: var(--space-2xl-3xl);
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100rem;
  gap: 5rem;
  @media screen and (max-width: 800px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  }
`;

export const ImageContainer = styled.div`
  margin-inline: auto;
  position: relative;
  aspect-ratio: 700/1120;
  width: 37.5rem;
  height: 100%;
  order: ${(props: Props) => (props.reverse === true ? 1 : 2)};
  border: outset 2px black;


`;

export const DescContainer = styled.div`
  margin-inline: auto;
  max-width: 75ch;
  order: ${(props: Props) => (props.reverse === true ? 2 : 1)};
  margin-top: var(--space-2xl-3xl);
`;

export const HeaderContainer = styled.div`
  margin-inline: auto;

  position: relative;
  .team__subheader {
    text-align: center;
    width: 30ch;
    margin-inline: auto;
  }
  h2:nth-of-type(1) {
    margin-top: var(--space-2xxl);
  }

  .team__header::before {
    content: url(images/star-1.svg);
    height: 3rem;
    /* left:0;
    top: 0; */
    position: absolute;
    width: 3rem;
    top: 35%;
    left: 10%;
    margin-right: -90%;
    transform: translate(-65%, -90%);
  }
  .team__header::after {
    content: url(images/star-2.svg);
    height: 6rem;
    position: absolute;
    width: 6rem;
    bottom: var(--space-2xxl);
    right: var(--space-2xxl);
  }
`;
