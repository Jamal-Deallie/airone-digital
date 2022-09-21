import { MouseEvent, ReactNode } from 'react';
import { Container } from './styled';

export type ButtonProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: ReactNode; // make the component able to receive children elements
  variant?: 'primary' | 'secondary'; // two styling options
  disabled?: boolean; // make the button disabled or not
  color?: string;
  borderRadius?: string;
};

const Button = ({
  onClick,
  children,
  variant = 'primary',
  disabled,
  color,
  borderRadius,
}: ButtonProps) => {
  return (
    <Container
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      color={color}
      borderRadius={borderRadius}>
      {children}
    </Container>
  );
};

export default Button;
