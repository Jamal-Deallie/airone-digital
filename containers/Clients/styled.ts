import styled from 'styled-components';

export const ClientContainer = styled.div`
  padding-top: var(--space-2xl);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1;
  height: auto;
  width: clamp(5.25rem, calc(4.96rem + 1.46vw), 6rem);
`;
