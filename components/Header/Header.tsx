import { ReactNode } from 'react';
import { HeadingText } from './styled';

type Props = {
  children: ReactNode;
  color?: string;
  fontSize?: string;
  textAlign?: string;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  lineHeight?: number;
  className?: string;
};

export const Header = ({
  color,
  children,
  fontSize,
  headingLevel,
  textAlign,
  lineHeight,
  className,
}: Props) => {
  return (
    <HeadingText
      headingLevel={headingLevel ? headingLevel : 'p'}
      color={color}
      fontSize={fontSize}
      textAlign={textAlign}
      lineHeight={lineHeight}
      className={className}>
      {children}
    </HeadingText>
  );
};
