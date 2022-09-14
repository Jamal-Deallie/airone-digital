import styled from 'styled-components';

type Props = { reverse?: boolean };

export const InnerContainer = styled.div<Props>`
  height: 100%;
  width: 100%;
  padding-top: var(--space-3xl);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  justify-items: center;
  align-items: center;
  gap: 2rem;
  margin-inline: auto;
  .stats__flex-cont {
    width: 100%;
  }

  .stats__icon-cont {
    margin-top: var(--space-m);
  }
  .stats__icon-cont:nth-of-type(1) {
    position: relative;
    width: 13rem;
    height: 13rem;
    aspect-ratio: 1/1;
    height: auto;
    margin-inline: auto;
  }
  .stats__grid-cont {
    border-left: 3px solid ${props => props.theme.colors.primary};
    width: 100%;
    height: max-content;
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
