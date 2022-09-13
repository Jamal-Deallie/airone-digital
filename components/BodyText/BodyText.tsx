import { ReactNode } from 'react';
import { Text } from './styled';

type Props = {
  children: ReactNode;
  color?: string;
  fontSize?: string;
  textAlign?: string;
};

const BodyText = ({ color, children, fontSize, textAlign }: Props) => {
  return (
    <Text color={color} fontSize={fontSize} textAlign={textAlign}>
      {children}
    </Text>
  );
};

export default BodyText;
