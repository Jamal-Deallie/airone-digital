import styled from 'styled-components';

export const StorySection = styled.section`
  width: 100%;
  padding: 15% 0;
`;

export const InnerContainer = styled.div`
  max-width: 120rem;
  margin: 0;
  p {
    line-height: 1;
    font-weight: 400;
    font-size: 9.313rem;
    font-family: Headline, sans-serif;
    text-align: center;
    color: ${props => props.theme.variant.primary};
    -webkit-text-stroke: 2.5px ${props => props.theme.variant.primary};
    -webkit-text-fill-color: transparent;
    -webkit-font-smoothing: 'subpixel-antialiased';
    text-align: left;
    margin-left: 15%;
  }
`;
