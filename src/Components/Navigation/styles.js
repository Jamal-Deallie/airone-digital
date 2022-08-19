import styled from 'styled-components';

export const Header = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 2.3rem 0 0.5rem;
  background: ${props => props.theme.variant.secondary};
  color: ${props => props.theme.variant.primary};
  z-index: 1;
  height: 10rem;

  .logo {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    -webkit-text-stroke: 0.0000015rem ${props => props.theme.variant.primary};
    -webkit-text-fill-color: ${props => props.theme.variant.secondary};
    -webkit-font-smoothing: 'subpixel-antialiased';
    font-size: 2.8rem;
    letter-spacing: 2.25px;
  }
`;

export const InnerContainer = styled.div``;
