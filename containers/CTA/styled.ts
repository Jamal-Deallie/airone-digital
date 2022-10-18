import styled from 'styled-components';

export const InnerContainer = styled.div`
  padding: var(--space-2xxl) var(--space-2xxl);
  position: relative;
  width: 100%;
  .contact-link {
    position: relative;
    height: 10rem;
    display: flex;
    justify-content: center;
  }

  .link-inner {
    position: absolute;
    width: max-content;
    height: auto;
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .link-cont {
    position: relative;
    margin-top: var(--space-3xl);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 0.75rem;
  }
  .star-wrap-r {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    margin-top: -4.5rem;

    div:nth-of-type(1) {
      margin-top: 0.95rem;
    }
    div:nth-of-type(2) {
      margin-left: 1.75rem;
      rotate: -20deg;
    }
    div:nth-of-type(3) {
      margin-top: 0.5rem;
      margin-left: 5rem;
      rotate: -35deg;
    }
  }

  .star-wrap-l {
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: 0;

    div:nth-of-type(1) {
      margin-top: 1rem;
      rotate: -20deg;
    }
    div:nth-of-type(2) {
      margin-top: 0.5rem;
      margin-left: 1.5rem;
      rotate: -45deg;
    }
  }
`;

export const HeaderContainer = styled.div`
  h2:nth-of-type(1) {
    margin-right: 19vw;
  }
`;
