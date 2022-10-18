import { useEffect } from 'react';

type Props = {
  newWidth?: number;
  newHeight?: number;
};

const StarDiamond = ({ newWidth, newHeight }: Props) => {
  const defaultDimensions = { width: 68.74, height: 71.42 };
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
      id='star'
      width={newWidth}
      height={newHeight}
      viewBox={`0 0 ${defaultDimensions.width} ${defaultDimensions.height}`}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M34.37 58.46c3.26-7.05 9.88-16.61 23.02-22.76-13.14-6.15-19.76-15.71-23.02-22.76-3.26 7.05-9.88 16.61-23.02 22.76 13.14 6.14 19.76 15.71 23.02 22.76Z'
        style={{
          fill: '#f89621',
        }}
      />
      <path
        d='M2.12 38.58c22.99 7.08 28.23 24.95 29.17 29.19v.65c0 1.58 1.22 2.88 2.79 2.99h.59a3.01 3.01 0 0 0 2.8-2.99v-.65c.93-4.25 6.18-22.11 29.17-29.19a3.003 3.003 0 0 0 0-5.74c-23-7.08-28.25-24.95-29.18-29.19V3c0-1.58-1.22-2.88-2.79-2.99h-.59A3.01 3.01 0 0 0 31.28 3v.65C30.35 7.9 25.1 25.76 2.11 32.84a3.003 3.003 0 0 0 0 5.74Zm32.25-25.63c3.26 7.05 9.88 16.61 23.02 22.76-13.14 6.14-19.76 15.71-23.02 22.76-3.26-7.05-9.88-16.61-23.02-22.76C24.49 29.56 31.11 20 34.37 12.95Z'
        style={{
          fill: '#081a2b',
        }}
      />
    </svg>
  );
};

export default StarDiamond;
