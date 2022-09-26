import styled from 'styled-components';

type Props = { reverse?: boolean };

export const InnerContainer = styled.div<Props>`
  height: 100%;
  width: 100%;
  padding: var(--space-2xl-3xl) 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  justify-items: center;
  align-items: center;
  gap: 2rem;
  margin-inline: auto;

  .stats__icon-cont:nth-of-type(1) {
    position: relative;
    aspect-ratio: 1/1;
    height: auto;
    margin-inline: auto;
  }
  .stats__grid-cont {
    border-left: 3px solid ${props => props.theme.colors.secondary};
    width: 100%;
    max-width: 55rem;
    padding: var(--space-m);
  }
`;

export const SubheaderContainer = styled.div`
  max-width: 65rem;
  margin-inline: auto;
`;

export const GridContainer = styled.div<Props>`
  order: ${(props: Props) => (props.reverse === true ? 2 : 1)};
`;

export const DescContainer = styled.div<Props>`
  order: ${(props: Props) => (props.reverse === true ? 1 : 2)};
`;

export const StatFooterContainer = styled.div`
  padding: var(--space-2xl-3xl) 0;
  .stats__desc-cont {
    width: 100%;
    max-width: 55rem;
    padding: var(--space-m);
    margin-inline: auto;
  }
`;
