import styled from 'styled-components';

export const NavContainer = styled('div')({
  height: '10rem',
  width: '100%',
  position: 'fixed',
  // backgroundColor: '#038C25',
});

export const ContentContainer = styled('div')``;

export const FooterContainer = styled('footer')``;

export const FooterInner = styled('div')``;

export const SmoothContainer = styled('div')``;

export const SmoothContent = styled.section`
  overflow: visible;
  width: 100%;
  min-height: 400vh;
`;

export const SmoothWrapper = styled.div`
  position: absolute;
  top: 10rem !important;
  /* background: ${props => props.theme.variant.secondary}; */
  z-index: 100;
  width: 100%;
`;

export const Spacer = styled.div`
  min-height: 50vh;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
