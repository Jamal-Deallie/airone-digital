import styled from 'styled-components';

export const InnerContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  .showreel-vid {
    object-fit: cover;
    width: 100%;
    height: 60vh;
    /* z-index: -1; */
  }

  .ParallaxMainContent {
    background-color: black;
    color: #b8c1ec;

    height: 100%;
    min-height: 30rem;
  }
  .ParallaxMainContent h3 {
    color: gold;
    text-align: center;
  }

  /* Video Parallax Section*/
  .ParallaxVideo {
    height: 300px;
  }

  .ParallaxVideo video {
    object-fit: cover;
    width: 100vw;
    height: 60vh;
    position: sticky;
    top: 0;
    left: 0;
  }
`;
