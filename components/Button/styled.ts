import styled from 'styled-components';

enum Variant {
  primary,
  secondary,
  tertiary,
}

type ButtonProps = {
  variant?: Variant;
};

export const CustomButton = styled.button<ButtonProps>``