import { useEffect } from 'react';

type Props = {
  newWidth?: number;
  newHeight?: number;
};

const Web = ({ newWidth, newHeight }: Props) => {
  const defaultDimensions = { width: 128, height: 128 };
  useEffect(() => {
    let finalDimensions = { width: 0, height: 0 };
    if (!newWidth && !newHeight) {
      finalDimensions.width = defaultDimensions.width;
      finalDimensions.height = defaultDimensions.height;
    } else if (newWidth) {
      finalDimensions.width = newWidth;
      const ratio = newWidth / defaultDimensions.width;
      finalDimensions.height = ratio * defaultDimensions.height;
    } else if (newHeight) {
      finalDimensions.height = newHeight;
      const ratio = newHeight / defaultDimensions.height;
      finalDimensions.width = ratio * defaultDimensions.width;
    }
  });
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={newWidth}
      height={newHeight}
      viewBox={`0 0 ${defaultDimensions.width} ${defaultDimensions.height}`}>
      <path d='M121.25 5H6.75A6.758 6.758 0 0 0 0 11.754v71.5a6.758 6.758 0 0 0 6.75 6.75h38.04L36.412 108h-5.789a7.5 7.5 0 0 0 0 15h66.753a7.5 7.5 0 1 0 0-15h-5.788L83.21 90.007h38.04a6.758 6.758 0 0 0 6.75-6.75v-71.5A6.758 6.758 0 0 0 121.25 5ZM3.5 11.754A3.254 3.254 0 0 1 6.75 8.5h114.5a3.254 3.254 0 0 1 3.25 3.25v57.122H118V16.754A1.751 1.751 0 0 0 116.25 15H11.75A1.751 1.751 0 0 0 10 16.754v52.118H3.5Zm111 57.118h-101V18.5h101ZM101.375 115.5a4 4 0 0 1-4 4H30.623a4 4 0 0 1 0-8h66.753a4 4 0 0 1 3.999 4ZM87.727 108H40.272l8.379-17.992h30.7ZM124.5 83.257a3.254 3.254 0 0 1-3.25 3.25H6.75a3.254 3.254 0 0 1-3.25-3.25V72.372h121Z' />
      <path d='M71.875 77.69h-15.75a1.75 1.75 0 0 0 0 3.5h15.75a1.75 1.75 0 0 0 0-3.5Z' />
    </svg>
  );
};

export default Web;
