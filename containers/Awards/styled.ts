import styled from 'styled-components';

export const SubheaderContainer = styled.div`
  max-width: 75rem;
  margin-inline: auto;
`;

export const AwardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10rem;
  padding-top: var( --space-2xl-3xl);

  .awards__img-cont {
    height: 10rem;
    aspect-ratio: 1/1;
    position: relative;
  }
`;
