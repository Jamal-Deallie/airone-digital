import styled from 'styled-components';

type StyledProps = { open?: boolean };

export const MenuBtn = styled.div`
  position: fixed;
  bottom: 0;
  margin: var(--space-s);
  height: 5rem;
  width: 12rem;
  border-radius: 5rem;
  background-color: #1a1b1d;
  overflow: hidden;
  cursor: pointer;
  z-index: 10;
  border: none;

  .menu__label {
    margin-top: 1.75rem;
    font-family: Headline, sans-serif;
    font-size: 1.9rem;
    line-height: 1;
    color: #a682fa;
    display: flex;
    flex-direction: column;

    span {
      height: 5rem;
      text-align: center;
      letter-spacing: 0.15px;
    }
  }
`;

export const MenuContainer = styled.div`
  display: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 9;
  .menu__layer {
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: -1;
    background-color: ${props => props.theme.colors.secondary};
  }
  .menu__overlay {
    width: 100%;
    height: 100vh;
    z-index: 9;
    position: relative;
    background-color: ${props => props.theme.colors.primary};
    ul {
      padding: var(--space-3xl) 0 0 var(--space-3xl);
    }
    li.menu__links {
      overflow: hidden;
    }
    ul li:not(:first-child) {
      padding-top: var(--space-l);
    }
  }
`;
