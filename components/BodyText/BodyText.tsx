import { ReactNode } from 'react';
import { Text } from './styled';

type Props = {
  children: ReactNode;
  color?: string;
  fontSize?: string;
  textAlign?: string;
  fontWeight?: number;
};

const BodyText = ({
  color,
  children,
  fontSize,
  textAlign,
  fontWeight,
}: Props) => {
  return (
    <Text
      color={color}
      fontSize={fontSize}
      textAlign={textAlign}
      fontWeight={fontWeight}>
      {children}
    </Text>
  );
};

export default BodyText;
