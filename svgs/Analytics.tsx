import { useEffect } from 'react';

type Props = {
  newWidth?: number;
  newHeight?: number;
};

const Analytics = ({ newWidth, newHeight }: Props) => {
  const defaultDimensions = { width: 64, height: 64 };
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
      <style>{'.st0{fill:#1d1f21}'}</style>
      <title>{'Asset 13'}</title>
      <g id='Layer_2'>
        <g id='Layer_1-2'>
          <g id='_Group_'>
            <g id='_Group_2'>
              <path
                className='st0'
                d='M32 64 4 48V16L32 0l28 16v32L32 64zM6 46.8l26 14.9 26-14.9V17.1L32 2.3 6 17.1v29.7z'
                id='_Group_3'
              />
              <path
                className='st0'
                d='m32 45.7-11.6-6.3V24.7L32 18.3l11.6 6.3v14.7L32 45.7zm-9.6-7.5 9.6 5.2 9.6-5.2V25.8L32 20.6l-9.6 5.2v12.4z'
                id='_Group_4'
              />
            </g>
            <g id='_Group_5'>
              <path
                transform='rotate(-28.2 45.505 23.808)'
                className='st0'
                d='M30.2 22.8h30.6v2H30.2z'
                id='_Group_6'
              />
              <path
                transform='rotate(-61.823 18.507 23.804)'
                className='st0'
                d='M17.5 8.5h2v30.6h-2z'
                id='_Group_7'
              />
              <path className='st0' d='M31 31h2v31.8h-2z' id='_Group_8' />
            </g>
            <g id='_Group_9'>
              <g id='_Group_10'>
                <path
                  className='st0'
                  d='m56 47-1.7-.9.9-1.8 1.7.9L56 47zm-3.4-1.8-1.6-.9.9-1.8 1.7.9-1 1.8zm-3.3-1.8-1.7-.9.9-1.8 1.7.9-.9 1.8zm-3.4-1.8-1.7-.9.9-1.8 1.7.9-.9 1.8z'
                  id='_Group_11'
                />
              </g>
              <g id='_Group_12'>
                <path
                  className='st0'
                  d='m8 47-1-1.8 1.7-.9.9 1.8L8 47zm3.3-1.8-.9-1.8 1.7-.9.9 1.7-1.7 1zm3.4-1.8-.9-1.8 1.7-.9.9 1.8-1.7.9zm3.4-1.7-.9-1.8 1.7-.9.9 1.8-1.7.9z'
                  id='_Group_13'
                />
              </g>
              <g id='_Group_14'>
                <path
                  className='st0'
                  d='M33 17.1h-2v-1.9h2v1.9zm0-3.8h-2v-1.9h2v1.9zm0-3.7h-2V7.7h2v1.9zm0-3.8h-2V3.9h2v1.9z'
                  id='_Group_15'
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Analytics;
