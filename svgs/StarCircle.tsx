import { useEffect } from 'react';

type Props = {
  newWidth?: number;
  newHeight?: number;
};

const StarCircle = ({ newWidth, newHeight }: Props) => {
  const defaultDimensions = { width: 29.57, height: 29.57 };
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
        d='M6 14.79c0 4.84 3.94 8.79 8.79 8.79s8.79-3.94 8.79-8.79S19.64 6 14.79 6 6 9.94 6 14.79Z'
        style={{
          fill: '#f89621',
        }}
      />
      <path
        d='M0 14.79c0 8.15 6.63 14.79 14.79 14.79s14.79-6.63 14.79-14.79S22.94 0 14.79 0 0 6.63 0 14.79Zm23.57 0c0 4.84-3.94 8.79-8.79 8.79s-8.79-3.94-8.79-8.79S9.94 6 14.79 6s8.79 3.94 8.79 8.79Z'
        style={{
          fill: '#081a2b',
        }}
      />
    </svg>
  );
};

export default StarCircle;
