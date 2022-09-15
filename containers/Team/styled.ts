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

`;

export const ImageContainer = styled.div`
  margin-inline: auto;
  position: relative;
  aspect-ratio: 638/1021;
  width: 37.5rem;
  height: 100%;
  order: ${(props: Props) => (props.reverse === true ? 1 : 2)};
  border: solid 2px black;
`;

export const DescContainer = styled.div`
  margin-inline: auto;
  max-width: 75ch;
  order: ${(props: Props) => (props.reverse === true ? 2 : 1)};
  margin-top: var(--space-2xl-3xl);
`;

export const HeaderContainer = styled.div``