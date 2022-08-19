import styled from 'styled-components';

export const StorySection = styled.section`
  width: 100%;
  background-color: red;
`;

export const InnerContainer = styled.div`
  p {
    line-height: 1;
    font-weight: 400;
    font-size: 7.451rem;
    font-family: Headline, sans-serif;
    text-align: center;
    color: ${props => props.theme.variant.primary};
    text-align: left;
    max-width: 90rem;
  }
`;
