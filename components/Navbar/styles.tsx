import styled from 'styled-components';
import { PageText } from '../../helpers/PageText';

export const StyledNav = styled.nav`
  height: 10rem;
  background-color: transparent;
  position: fixed;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
`;

export const InnerContainer = styled.div`
  height: 10rem;
  width: 100%;
`;

export const Logo = styled.span`
  font-family: Headline, sans-serif;
  -webkit-text-stroke: 1.5px #1a1b1d;
  -webkit-text-fill-color: transparent;
  -webkit-font-smoothing: subpixel-antialiased;
  font-size: 3.8rem;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;
