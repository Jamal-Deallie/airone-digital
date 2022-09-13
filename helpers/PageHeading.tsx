import { ReactNode, HTMLAttributes, createElement } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children: ReactNode;
  fontSize?: any;
  color?: string;
  textAlign?: string;
  className?: string;
  lineHeight?: number;
}

const PageHeading = ({
  headingLevel = 'p',
  children,
  className,
}: HeadingProps) => {
  const Heading = ({ ...props }: HTMLAttributes<HTMLHeadingElement>) =>
    createElement(headingLevel, props, children);

  return <Heading className={className}>{children}</Heading>;
};

export default PageHeading;
