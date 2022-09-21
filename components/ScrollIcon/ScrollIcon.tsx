import { IconScroll, Container } from './styled';

type PropsIconScroll = {
  color?: string;
};

const SwipeIcon = ({ color }: PropsIconScroll) => {
  return (
    <Container>
      <IconScroll className='scroll-down' color={color} />
    </Container>
  );
};

export default SwipeIcon;
