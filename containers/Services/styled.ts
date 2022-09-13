import styled from 'styled-components';

type Props = { reverse?: boolean };

export const InnerContainer = styled.div<Props>`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  justify-items: center;
  align-items: center;
  gap: 2rem;
  margin-inline: auto;
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
    border-right: 2px solid ${props => props.theme.colors.secondary};
    width: 100%;
    height: max-content;
    max-width: 45rem;
    padding: var(--space-m);
  }
`;

export const GridContainer = styled.div<Props>`
  order: ${(props: Props) => (props.reverse === true ? 2 : 1)};
`;

export const DescContainer = styled.div<Props>`
  order: ${(props: Props) => (props.reverse === true ? 1 : 2)};
`;
