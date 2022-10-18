import { useEffect } from 'react';

type Props = {
  newWidth?: number;
  newHeight?: number;
};

const StarTwo = ({ newWidth, newHeight }: Props) => {
  const defaultDimensions = { width: 67.01, height: 68.05 };
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
        d='M24.73 44.96c.91 0 1.78.42 2.35 1.14l9.74 12.32 3.85-15.22c.24-.96.94-1.73 1.87-2.08l14.72-5.46-13.29-8.37a2.996 2.996 0 0 1-1.4-2.42l-.64-15.69-12.06 10.05c-.76.63-1.78.85-2.73.58l-15.12-4.24 5.83 14.58c.37.92.26 1.96-.29 2.78L8.86 46l15.67-1.04h.2Z'
        style={{
          fill: '#f8961d',
        }}
      />
      <path
        d='M.4 50.91c.57.99 1.67 1.57 2.79 1.49l20.16-1.34 12.53 15.85c.58.73 1.45 1.14 2.35 1.14.21 0 .42-.02.63-.07 1.12-.24 2-1.09 2.28-2.2L46.1 46.2l18.94-7.02a3.01 3.01 0 0 0 1.94-2.5c.12-1.14-.42-2.24-1.38-2.85L48.5 23.06l-.82-20.19A3.01 3.01 0 0 0 45.9.25a3.016 3.016 0 0 0-3.14.44L27.24 13.62 7.8 8.17a2.995 2.995 0 0 0-3.59 4l7.5 18.76L.5 47.74c-.63.95-.67 2.18-.1 3.17Zm17.17-17.97c.55-.82.66-1.86.29-2.78l-5.83-14.58 15.12 4.24c.95.27 1.97.05 2.73-.58L41.94 9.19l.64 15.69c.04.99.56 1.89 1.4 2.42l13.29 8.37-14.72 5.46c-.93.34-1.62 1.12-1.87 2.08l-3.85 15.22-9.74-12.32a3.005 3.005 0 0 0-2.35-1.14h-.2L8.87 46.01l8.7-13.07Z'
        style={{
          fill: '#081a2b',
        }}
      />
    </svg>
  );
};

export default StarTwo;
