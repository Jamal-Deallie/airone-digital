import styled from 'styled-components';

export const ServiceSection = styled.section`
  background: pink;
`;

export const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  h3 {
    font-size: 3.815rem;
    color: ${props => props.theme.variant.primary};
  }
`;

export const FlexCont = styled.div`
  padding: 1rem 1rem;
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 20vh;
  align-items: center;
  justify-items: center;
  max-width: 1100px;
  margin: 0 auto;

  .parallax-text {
    grid-column: 2;
    grid-row: 1;

    .content {
      border-left: solid 1px white;
      padding: 0.5rem 2rem;
      h2 {
        font-size: 3.2rem;
      }
      p {
        font-size: 1.8rem;
        font-family: open-sans;
      }
    }
  }
  .image_cont {
    position: relative;
    height: 65vh;
    overflow: hidden;
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    position: relative;
  }

  img {
    top: 0;
    position: absolute;
    width: 100%;
    height: 140%;
    object-fit: cover;
  }
`;
