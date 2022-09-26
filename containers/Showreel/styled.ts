import styled from 'styled-components';

export const InnerContainer = styled.div`
  height: 100%;
  width: 100%;

  .vid-cont-height {
    height: 90vh;
    overflow: hidden;
    position: relative;
  }

  .vid-cont-height video {
    position: absolute;
    bottom: 0;
    height: calc(100vh * 1.25);
    object-fit: cover;
    display: block;
    width: 100%;
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
`;
