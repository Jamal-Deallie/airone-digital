import { ReactNode } from 'react';

type Props = {
  className?: string;
  fontSize?: any;
  color?: string;
  children: ReactNode;
  textAlign?: string;
  fontFamily?: string;
  fontWeight?: number;
  textTrans?: string;
};

export const PageText = ({ className, children }: Props) => {
  return <p className={className}>{children}</p>;
};
