import styled from 'styled-components';

export const MissionSection = styled.section`
  position: relative;
  height: calc(100vh - 10rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  max-width: 120rem;
  background-color: pink
  height: 90vh;
  margin: 0 auto;
  position: relative;
  p {
    line-height: 1;
    font-weight: 400;
    font-size: 9.313rem;
    font-family: Headline, sans-serif;
    text-align: center;
  }


  .cloud-left {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%
    top: 0;
  }
  .cloud-right {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%
    top: 0;
  }
`;

export const CloudContainer = styled.div`
  /* position: absolute; */
`;
