import styled from 'styled-components';

export const StyledLayout = styled('div')`
  background-color: ${props => props.theme.variant.secondary};
`;

export const NavContainer = styled('div')({
  flexGrow: 1,
  height: '10rem',
  width: '100%',
  zIndex: 4,
  top: 0,
  left: 0,
  right: 0,
  position: 'fixed',
  backgroundColor: '#038C25',
});

export const ContentContainer = styled('div')`
  color: ${props => props.theme.variant.primary};
  position: relative;
  height: 100vh;
`;

export const FooterContainer = styled('footer')`
  max-width: 1024px;
  margin: 0 auto;
  padding: 8em 2em;
  overflow: hidden;
  max-width: 100%;
  height: 35rem;
  background-color: orange;
`;

export const FooterInner = styled('div')`
  display: block;
  max-width: 100%;
  height: 180%;
  object-fit: cover;
`;

export const SmoothContainer = styled('div')`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  overflow: visible;
  padding: 0 1.2rem;
  min-height: 100vh;
  display: block;
  background-color: #111;
  font-family: 'Open Sans', sans-serif;
  color: white;
  overscroll-behavior: none;
  margin: 0;
  padding: 0;
  font-weight: 300;
  overflow-x: hidden;
  min-height: 100vh;
  padding: 0 0.75rem;
  overflow: visible;
  width: 100%;
  margin-top: 10rem p {
    line-height: 1.35;
  }
  h1 {
    font-size: clamp(12px, 8vw, 100px);
    text-align: center;
    line-height: 0.67;
    margin: 0 auto;
    font-family: 'wild_worldbold';
  }

  .bars {
    display: flex;
    flex-wrap: wrap;
    column-gap: 4rem;
  }
  section {
    min-height: 100vh;
  }
  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 0.5rem;
  }
`;

export const SmoothContent = styled.div`
  height: 4000px;
  overflow: visible;
  width: 100%;
`;

export const Spacer = styled.div`
  visibility: hidden;
  width: 2px;
  height: 4000px;
  position: absolute;
  left: 400px;
  top: 0px;
  background-color: #777;
`;
