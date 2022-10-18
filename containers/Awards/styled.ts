import styled from 'styled-components';

export const Container = styled.div`
  padding: var(--space-2xl-3xl) var(--space-2xxl) 0;
`;
export const SubheaderContainer = styled.div`
  margin-inline: auto;
  .award__header {
    font-family: var(--heading-font);
    font-size: clamp(5.25rem, calc(3.79rem + 7.32vw), 20.00rem);
    color: var(--secondary-variant);
    line-height: 0.9;
  }
  .awards__desc {
    font-size: 2.4rem;
    text-align: center;
    max-width: 35vw;
    margin-inline: auto;
    -webkit-font-smoothing: subpixel-antialiased;
    font-weight: 400;
    color: var(--primary-variant);
  }
`;

export const AwardContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  .award-cont {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: flex-end;
    gap: 5rem;
    max-width: 50rem;
  }
  .awards__img-cont {
    height: 13rem;
    aspect-ratio: 1/1;
    position: relative;

  }
`;
