import styled from 'styled-components';

export const Section = styled.section`
  padding: var(--space-3xl) 0;
`;

export const InnerContainer = styled.div`
  position: relative;
  max-width: 85rem;
  .about__text {
    margin-top: var(--space-xl);
    max-width: 50rem;
  }
`;
