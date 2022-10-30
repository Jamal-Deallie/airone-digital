import { ReactNode, MouseEvent } from 'react';
import cn from 'classnames';

export type ButtonProps = {
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'primary' | 'secondary';
};

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button
      className={cn(type === 'primary' ? 'btn-primary' : 'btn-secondary')}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;


{/* <input type="button" value="Submit" /> */}
