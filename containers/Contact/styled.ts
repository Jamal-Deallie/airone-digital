import styled from 'styled-components';

export const GridContainer = styled.div`
padding-top: var(--space-2xxl);
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  .contact__cont {
    width: 50%;
    @media only screen and (max-width: 800px) {
      width: 100%;
    }
  }
`;
