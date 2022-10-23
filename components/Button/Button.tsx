import { ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode; // make the component able to receive children elements
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className='btn-primary' type='submit'>
      {children}
    </button>
  );
};

export default Button;
