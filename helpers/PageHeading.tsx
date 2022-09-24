import { ReactNode, HTMLAttributes, createElement } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  fontSize?: any;
  color?: string;
  textAlign?: string;
  className?: string;
  lineHeight?: number;
  shadow?: boolean;
}

const PageHeading = ({
  headingLevel = 'h1',
  children,
  className,
}: HeadingProps) => {
  const Heading = ({ ...props }: HTMLAttributes<HTMLHeadingElement>) =>
    createElement(headingLevel, props, children);

  return <Heading className={className}>{children}</Heading>;
};

export default PageHeading;
