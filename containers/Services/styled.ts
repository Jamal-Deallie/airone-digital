import styled from 'styled-components';

type Props = { reverse?: boolean };

export const InnerContainer = styled.div<Props>`
  height: 100%;
  width: 100%;
  padding-top: var(--space-2xxl);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  gap: 2rem;
  margin-inline: auto;
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
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

    p.service__desc {
      border-left: 3px solid ${props => props.theme.colors.secondary};
      @media only screen and (max-width: 800px) {
        border-left: none;
      }
    }
  }
`;

export const GridContainer = styled.div<Props>`
  order: ${(props: Props) => (props.reverse === true ? 2 : 1)};
  @media only screen and (max-width: 800px) {
    order: 1;
  }
`;

export const DescContainer = styled.div<Props>`
  order: ${(props: Props) => (props.reverse === true ? 1 : 2)};
  @media only screen and (max-width: 800px) {
    order: 2;
  }
`;
