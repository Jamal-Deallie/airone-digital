import styled from 'styled-components';

export const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  .reel__flex {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: flex-end;

    @media screen and (max-width: 800px) {
      display: block;
      h1:nth-of-type(1) {
        margin-top: var(--space-m);
      }
    }
  }
  .reel__vid-cont {
    margin-left: 2rem;
    margin-inline: auto;
    order: 2;
    video {
      max-height: 45rem;
      margin-inline: auto;
    }
  }
  .reel_heading-line {
  }
`;
