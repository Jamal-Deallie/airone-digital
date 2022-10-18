import { useEffect } from 'react';

type Props = {
  newWidth?: number;
  newHeight?: number;
};

const Strategy = ({ newWidth, newHeight }: Props) => {
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
      <path d='M126.579 75.749a41.222 41.222 0 0 0-19.336-25.2 42.7 42.7 0 0 0-2.719-1.421 41.5 41.5 0 1 0-81.5.22 41.39 41.39 0 0 0-2.263 1.2 41.5 41.5 0 0 0 10.009 76.026 41.724 41.724 0 0 0 10.808 1.432 41.259 41.259 0 0 0 20.683-5.577 39.55 39.55 0 0 0 1.743-1.082c.605.394 1.19.762 1.743 1.082a41.5 41.5 0 0 0 60.836-46.682ZM63.75 3.5a37.981 37.981 0 0 1 37.485 44.214A41.792 41.792 0 0 0 64 51.634 41.707 41.707 0 0 0 26.3 47.9 37.97 37.97 0 0 1 63.75 3.5ZM64 117.106a37.755 37.755 0 0 1-15.006-36.82 41.518 41.518 0 0 0 29.981-.181A38.283 38.283 0 0 1 64 117.106Zm0-61.236a37.655 37.655 0 0 1 10.416 11.62 38.06 38.06 0 0 1 3.771 9.146 37.862 37.862 0 0 1-28.422.184 38.034 38.034 0 0 1 3.819-9.33A37.655 37.655 0 0 1 64 55.87Zm-13.447 9.87a41.609 41.609 0 0 0-4.046 9.617A38.187 38.187 0 0 1 27.052 51.35 38.217 38.217 0 0 1 60.9 53.808 41.14 41.14 0 0 0 50.553 65.74Zm30.876 9.39a41.576 41.576 0 0 0-3.982-9.39A41.135 41.135 0 0 0 67.1 53.809a38.29 38.29 0 0 1 33.4-2.643A38.227 38.227 0 0 1 81.429 75.13ZM8.6 105.49a38 38 0 0 1 13.907-51.908c.43-.249.88-.49 1.336-.728A41.688 41.688 0 0 0 45.7 78.843a41.23 41.23 0 0 0 15.215 40.31c-.134.08-.276.171-.406.246A38.042 38.042 0 0 1 8.6 105.49Zm110.8 0a38.044 38.044 0 0 1-51.907 13.91c-.132-.076-.275-.168-.41-.249a41.815 41.815 0 0 0 15.175-40.532 41.735 41.735 0 0 0 21.465-26c.605.308 1.2.628 1.77.959A38 38 0 0 1 119.4 105.49Z' />
    </svg>
  );
};

export default Strategy;
