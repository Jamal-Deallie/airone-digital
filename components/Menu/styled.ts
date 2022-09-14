import styled from 'styled-components';

export const MenuBtn = styled.div`
  position: fixed;
  bottom: 0;
  margin: var(--space-s);
  height: 5.5rem;
  width: 12rem;
  border-radius: 5rem;
  background-color: #1a1b1d;
  overflow: hidden;

  .menu__label {
    font-family: Headline, sans-serif;
    font-size: 2.441rem;
    color: #a682fa;
    display: flex;
    flex-direction: column;

    span {
      line-height: 5.5rem;
      text-align: center;
      letter-spacing: 0.15px;
    }
  }
`;

export const MenuContainer = styled.div`
  display: none;
`;
