import * as React from 'react';
import { useEffect } from 'react';

type Props = {
  newWidth?: number;
  newHeight?: number;
};

const Brand = ({ newWidth, newHeight }: Props) => {
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
      <path d='M127.6 62.9c-1.2-1.4-28.8-35.4-63.6-35.4S1.5 61.5.4 62.9c-.5.6-.5 1.6 0 2.2 1.2 1.4 28.8 35.4 63.6 35.4s62.5-34 63.6-35.4c.5-.6.5-1.6 0-2.2zM64 97C34.3 97 9.1 69.8 4 64c5.1-5.8 30.2-33 60-33 29.7 0 54.9 27.2 60 33-5.1 5.8-30.3 33-60 33z' />
      <path d='M64 39.3c-13.7 0-24.8 11.1-24.8 24.8S50.3 88.8 64 88.8 88.8 77.7 88.8 64C88.7 50.3 77.7 39.3 64 39.3zm0 46c-11.7 0-21.3-9.5-21.3-21.3S52.3 42.8 64 42.8 85.3 52.3 85.3 64c-.1 11.7-9.6 21.2-21.3 21.3z' />
      <path d='M77.9 61.8c-1.5 1.2-3.3 1.9-5.2 1.9-4.6 0-8.3-3.7-8.3-8.3 0-1.9.7-3.8 1.9-5.2.6-.8.5-1.8-.3-2.5-.4-.4-1.1-.4-1.9-.4-9.3 0-16.8 7.5-16.8 16.7S54.7 80.8 64 80.8 80.8 73.3 80.8 64c0-.8 0-1.9-.9-2.4-.7-.3-1.5-.3-2 .2zM64 77.3c-7.3 0-13.2-5.9-13.2-13.3 0-6.4 4.6-11.9 10.9-13-2.5 6 .4 12.9 6.5 15.4 2.8 1.2 6 1.2 8.9 0-1.2 6.2-6.7 10.8-13.1 10.9z' />
    </svg>
  );
};

export default Brand;
