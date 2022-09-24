import {
  Section,
  InnerContainer,
  ScrollContainer,
  HeadingContainer,
} from './styled';
import { Header } from '../../components/Header/Header';
import ScrollIcon from '../../components/ScrollIcon/ScrollIcon';

const Landing = () => {
  return (
    <Section>
      <InnerContainer>
        <HeadingContainer className='container'>
          <Header
            className='landing__header'
            fontSize={'clamp(3.39rem, calc(0.55rem + 11.39vw), 14.21rem)'}
            textAlign={'center'}
            headingLevel={'h1'}>
            <span>CREATIVE</span> IDEAS OUT OF <span>THIS </span>
            <span>WORLD</span>
          </Header>
        </HeadingContainer>
        <ScrollContainer className='landing__scroll'>
          <ScrollIcon />
        </ScrollContainer>
      </InnerContainer>
    </Section>
  );
};

export default Landing;
