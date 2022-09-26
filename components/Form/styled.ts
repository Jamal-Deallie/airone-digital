import styled from 'styled-components';

export const FormWrap = styled.div`
  display: grid;
  grid-template-rows: auto;
  gap: var(--space-s);
  width: 100%;

  .form__input {
    width: 100%;
  }
  .form__input > * {
    height: 4.5rem;
    width: 100%;
    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.secondary};
    font-size: 1.6rem;
    ${props => props.theme.fontFamily.body};
    color: ${props => props.theme.colors.secondary};
    padding-left: var(--space-xs);

    &::placeholder {
      color: ${props => props.theme.colors.secondary};
      ${props => props.theme.fontFamily.body};
      font-weight: none;
    }
    &:focus {
      outline: none;
      font-weight: 600;
    }
  }

  .form__input > textarea {
    height: 10.5rem;
    resize: none;
    padding-top: var(--space-s);
    &::placeholder {
      color: ${props => props.theme.colors.secondary};
      ${props => props.theme.fontFamily.body};
    }
  }
`;
