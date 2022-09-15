import { ReactNode } from 'react';

type Props = {
  className?: string;
  fontSize?: any;
  color?: string;
  children: ReactNode;
  textAlign?: string;
  fontFamily?: string;
  fontWeight?: number;
};

export const PageText = ({ className, children }: Props) => {
  return <span className={className}>{children}</span>;
};
