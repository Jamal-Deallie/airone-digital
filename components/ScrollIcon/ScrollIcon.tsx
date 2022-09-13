import { IconScroll } from './styled';

type PropsIconScroll = {
  color?: string;
};

const SwipeIcon = ({ color }: PropsIconScroll) => {
  return <IconScroll className='scroll-down' color={color} />;
};

export default SwipeIcon;
