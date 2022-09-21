import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const VARIANT = {
  primary: css`
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.secondary};
  `,
  secondary: css`
    color: ${props => props.theme.colors.secondary};
    background: ${props => props.theme.colors.primary};
  `,
  tertiary: css`
    color: ${props => props.theme.colors.primary};
    background: transparent;
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;

export const Container = styled.button<ButtonProps>`
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;
  font-size: 1.6rem;
  border-radius: ${props => props.borderRadius && props.borderRadius};
  ${props => props.theme.fontFamily.body};
  ${props => props.variant && VARIANT[props.variant]}
  ${props => props.disabled && DISABLED}
`;
