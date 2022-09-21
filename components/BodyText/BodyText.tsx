import { ReactNode } from 'react';
import { Text } from './styled';

type Props = {
  children: ReactNode;
  color?: string;
  fontSize?: string;
  textAlign?: string;
  className?: string;
  fontWeight?: number;
  textTrans?: string;
};

const BodyText = ({
  color,
  children,
  fontSize,
  textAlign,
  fontWeight,
  className,
  textTrans
}: Props) => {
  return (
    <Text
      className={className}
      color={color}
      fontSize={fontSize}
      textAlign={textAlign}
      fontWeight={fontWeight}
      textTrans={textTrans}
      >
      {children}
    </Text>
  );
};

export default BodyText;
