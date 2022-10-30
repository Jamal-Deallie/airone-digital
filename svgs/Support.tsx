import { useEffect } from 'react';

type Props = {
  newWidth?: number;
  newHeight?: number;
};

const Support = ({ newWidth, newHeight }: Props) => {
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
      xmlSpace='preserve'
      viewBox={`0 0 ${defaultDimensions.width} ${defaultDimensions.height}`}>
      <path d='M103.1 74.761v-8.214A16.768 16.768 0 0 0 86.35 49.8H78.2V31.647a6.758 6.758 0 0 0-6.75-6.75H53.3V1.747A1.749 1.749 0 0 0 51.55 0H1.75A1.749 1.749 0 0 0 0 1.747v49.8A1.749 1.749 0 0 0 1.75 53.3H24.9v18.15a6.758 6.758 0 0 0 6.75 6.75H49.8v8.151A16.768 16.768 0 0 0 66.55 103.1h8.214A26.647 26.647 0 1 0 103.1 74.761ZM3.5 3.5h46.3v46.3H3.5Zm24.9 67.95V53.3h23.15a1.749 1.749 0 0 0 1.75-1.75V28.4h18.15a3.254 3.254 0 0 1 3.25 3.25v39.8a3.254 3.254 0 0 1-3.25 3.25h-39.8a3.254 3.254 0 0 1-3.25-3.253Zm24.9 14.9V78.2h18.15a6.758 6.758 0 0 0 6.75-6.75V53.3h8.15A13.266 13.266 0 0 1 99.6 66.547v19.8A13.266 13.266 0 0 1 86.35 99.6h-19.8A13.266 13.266 0 0 1 53.3 86.348Zm48.05 38.15a23.18 23.18 0 0 1-23.084-21.4h8.084a16.769 16.769 0 0 0 16.75-16.75v-8.087a23.15 23.15 0 0 1-1.75 46.234Z' />
    </svg>
  );
};

export default Support;
