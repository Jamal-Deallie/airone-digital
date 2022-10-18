import styled from 'styled-components';
type ImageStyleProps = {
  aspect?: string;
};

export const Section = styled.section`
  padding: var(--space-2xl) 0 var(--space-3xl);
  .main-header {
    font-size: clamp(2.33rem, calc(0.85rem + 7.43vw), 9.77rem);
    color: var(--primary-variant);
    font-family: Headline;
    line-height: 0.9;
    text-align: center;
  }
`;
export const ClientContainer = styled.div`
  padding: var(--space-3xl) var(--space-m) 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  column-gap: 2.5rem;
  row-gap: 1rem;
  .img-cont {
  }

  h3 {
    font-size: 3.815rem;
    color: var(--primary-variant);
    font-family: var(--heading-font);
    line-height: 0.85;
  }

  .client.name__cont {
    height: 3rem;
  }

  .client.img__cont {
    height: 4rem;
  }

  .client.img__cont:nth-of-type(2) {
    height: 2.9rem;
  }
  .client.img__cont:nth-of-type(5) {
    height: 3.2rem;
  }
  .client.img__cont:nth-of-type(9) {
    height: 3.2rem;
  }
  .client.img__cont:nth-of-type(18) {
    margin-bottom: -0.2rem;
    height: 3.7rem;
  }
  .client.img__cont:nth-of-type(21) {
    height: 3.2rem;
  }
  .client.img__cont:nth-of-type(23) {
    height: 3.2rem;
  }
`;

export const ImageContainer = styled.div<ImageStyleProps>`
  position: relative;
  aspect-ratio: ${props => props.aspect && props.aspect};
  width: auto;
  height: 100%;
`;
