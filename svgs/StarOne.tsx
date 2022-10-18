import { useEffect } from 'react';

type Props = {
  newWidth?: number;
  newHeight?: number;
};

const StarOne = ({ newWidth, newHeight }: Props) => {
  const defaultDimensions = { width: 89.92, height: 86.24 };
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
        d='m27.28 54.74-3.55 22.95 20.38-11.15c.87-.47 1.91-.49 2.79-.05l20.73 10.46-4.3-22.82c-.18-.97.12-1.97.82-2.67l16.36-16.48-23.03-2.96c-.98-.13-1.83-.73-2.29-1.6L44.57 9.77l-9.93 20.99c-.42.89-1.26 1.52-2.23 1.68L9.48 36.16l16.9 15.93c.72.68 1.06 1.67.91 2.64Z'
        style={{
          fill: '#fcce3e',
        }}
      />
      <path
        d='m46.57 13.67-2-3.89-9.93 20.99c-.42.89-1.26 1.52-2.23 1.68L9.48 36.17l16.9 15.93c.72.68 1.06 1.67.91 2.64l-3.55 22.95 20.38-11.15c.87-.47 1.91-.49 2.79-.05l.14.07-.48-52.9Z'
        style={{
          fill: '#f8961d',
        }}
      />
      <path
        d='m.94 36.36 20.17 19.02-4.23 27.4a2.985 2.985 0 0 0 1.61 3.13c.87.44 1.92.43 2.79-.05L45.6 72.55l24.75 12.49c1.02.51 2.24.41 3.16-.28.91-.69 1.36-1.83 1.14-2.95l-5.14-27.25 19.53-19.68c.8-.81 1.08-2.01.71-3.09a3.001 3.001 0 0 0-2.46-2l-27.5-3.53L47.12 1.63a2.992 2.992 0 0 0-5.37.09L29.89 26.78 2.52 31.22c-1.13.18-2.05.99-2.39 2.08-.33 1.09-.02 2.28.81 3.06Zm31.46-3.91c.97-.16 1.81-.79 2.23-1.68l9.93-20.99 10.62 20.65c.45.88 1.31 1.48 2.29 1.6l23.03 2.96-16.36 16.48c-.7.7-1 1.7-.82 2.67l4.3 22.82L46.89 66.5c-.88-.45-1.93-.43-2.79.05L23.72 77.7l3.55-22.95c.15-.98-.19-1.96-.91-2.64L9.46 36.18l22.93-3.72Z'
        style={{
          fill: '#081a2b',
        }}
      />
    </svg>
  );
};

export default StarOne;
