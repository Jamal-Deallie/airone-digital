import styled from 'styled-components';

export const ServiceSection = styled.section`
  width: 100%;
  h2 {
    font-size: 7.451rem;
    padding-bottom: 5%;
    margin-left: 15%;
  }
`;

export const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  div.flex-container:nth-child(2n + 0) {
    padding: 10% 0;
  }
  h2 {
    font-size: 5.96rem;
    padding-bottom: 5%;
    line-height: 1;
  }
  h3 {
    font-size: 3.815rem;
    color: ${props => props.theme.variant.primary};
  }
  p {
    font-size: 1.953rem;
  }

  .flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10rem;

    .number {
      margin-top: 5rem;
      h2 {
        font-size: 22.737rem;
        line-height: 1;
        font-family: ${props => props.theme.fontFamily.heading};
      }
    }
    .flex-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      p {
        width: 45rem;
      }
      h2 {
        font-size: 4.768rem;
      }
    }
  }
`;
