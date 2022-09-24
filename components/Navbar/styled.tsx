import styled from 'styled-components';

export const StyledNav = styled.nav`
  height: 10rem;
  background-color: transparent;
  left: 0;
  top: 0;
  width: 100%;
  position: fixed;
  z-index: 2;
`;

export const InnerContainer = styled.div`
  height: 10rem;
  width: 100%;
  position: relative;
`;

export const Logo = styled.span`
  font-family: Headline, sans-serif;
  -webkit-text-stroke: 1.5px ${props => props.theme.colors.secondary};
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
    -webkit-text-fill-color: ${props => props.theme.colors.secondary};
  }
`;
