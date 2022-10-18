import { useEffect } from 'react';

type Props = {
  newWidth?: number;
  newHeight?: number;
};

const Ufo = ({ newWidth, newHeight }: Props) => {
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
      <path d='M66.773 10A11.93 11.93 0 1 0 78.7 21.928 11.945 11.945 0 0 0 66.773 10Zm0 20.36a8.43 8.43 0 1 1 8.427-8.432 8.439 8.439 0 0 1-8.427 8.429Zm0 63.777A11.93 11.93 0 1 0 78.7 106.066a11.943 11.943 0 0 0-11.927-11.929Zm0 20.36a8.43 8.43 0 1 1 8.431-8.431 8.44 8.44 0 0 1-8.431 8.434Zm29.748-68.323a11.925 11.925 0 1 0-8.436-3.489 11.889 11.889 0 0 0 8.436 3.489ZM90.56 28.288a8.43 8.43 0 1 1 0 11.923 8.406 8.406 0 0 1 0-11.923ZM28.59 85.309a11.931 11.931 0 1 0 16.871 0 11.847 11.847 0 0 0-16.871 0Zm14.4 14.4a8.432 8.432 0 1 1 2.469-5.961 8.438 8.438 0 0 1-2.472 5.958ZM36.634 64A11.931 11.931 0 1 0 24.7 75.928 11.945 11.945 0 0 0 36.634 64ZM24.7 72.428A8.431 8.431 0 1 1 33.134 64a8.44 8.44 0 0 1-8.434 8.428Zm63.385 12.881a11.93 11.93 0 1 0 16.872 0 11.943 11.943 0 0 0-16.872 0Zm14.4 14.4a8.43 8.43 0 1 1 0-11.923 8.44 8.44 0 0 1-.003 11.92ZM28.59 25.814a11.931 11.931 0 1 0 16.871 0 11.847 11.847 0 0 0-16.871 0Zm14.4 14.4a8.432 8.432 0 1 1 2.469-5.962 8.44 8.44 0 0 1-2.472 5.959Z' />
      <path d='m120.516 78.677-12.372-8.588a7.416 7.416 0 0 1 0-12.184l12.371-8.587a10.933 10.933 0 0 0 3.592-13.753 64 64 0 1 0-.086 57.037 11.018 11.018 0 0 0-3.505-13.925Zm.376 12.358A60.5 60.5 0 1 1 64.3 3.547a60.644 60.644 0 0 1 2.409-.048 60.667 60.667 0 0 1 54.261 33.623 7.415 7.415 0 0 1-2.454 9.321l-12.368 8.587a10.916 10.916 0 0 0 0 17.934l12.371 8.588a7.41 7.41 0 0 1 2.373 9.483Z' />
    </svg>
  );
};

export default Ufo;
