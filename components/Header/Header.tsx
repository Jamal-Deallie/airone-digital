import { ReactNode } from 'react';
import { HeadingText } from './styled';

type Props = {
  children: ReactNode;
  color?: string;
  fontSize?: string;
  textAlign?: string;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  lineHeight?: number;
  className?: string;
  shadow?: boolean;
  cn?: string;
};

export const Header = ({
  color,
  children,
  fontSize,
  headingLevel,
  textAlign,
  lineHeight,
  className,
  shadow,
}: Props) => {
  return (
    <HeadingText
      shadow={shadow}
      headingLevel={headingLevel ? headingLevel : 'h1'}
      color={color}
      fontSize={fontSize}
      textAlign={textAlign}
      lineHeight={lineHeight}
      className={className}>
      {children}
    </HeadingText>
  );
};
