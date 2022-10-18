import styled from 'styled-components';

export const StyledNav = styled.nav`

`;

export const InnerContainer = styled.div`
  height: 10rem;
  width: 100%;
  position: relative;
`;

export const Logo = styled.span`
  font-family: Headline, sans-serif;
  -webkit-text-stroke: 1.5px var(--primary-variant);
  -webkit-text-fill-color: transparent;
  -webkit-font-smoothing: subpixel-antialiased;
  font-size: 3.8rem;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  &:hover {
    -webkit-text-stroke: none;
    -webkit-text-fill-color: var(--primary-variant);
  }
`;
