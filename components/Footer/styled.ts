import styled from 'styled-components';

export const FooterSection = styled.footer`
  width: 100%;
  height: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  z-index: 1;
  bottom: 0;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding-inline: var(--space-xl-xl);
  padding-top: var(--space-m);

  .footer__flex-cont {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const HeaderContainer = styled.div`
  margin-top: var(--space-m);
  position: relative;
  h1 {
    line-height: 0.9;
  }
  .inner-div {
    position: relative;
    width: max-content;
    margin-inline: auto;
  }

  .star-wrap-r {
    position: absolute;
    margin-top: -4rem;
    margin-right: -2rem;
    right: 0;
    height: 2rem;
    rotate: -20deg;
  }

  .star-wrap-l {
    position: absolute;
    margin-top: -2rem;
    margin-left: 2vw;
    left: 0;
    height: 2rem;
    rotate: 25deg;
  }
`;

export const BottomContainer = styled.div`
  text-align: center;
  padding-bottom: var(--spacing-s);
`;
