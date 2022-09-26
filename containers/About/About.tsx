import { InnerContainer } from './styled';
import BodyText from '../../components/BodyText/BodyText';
import { HeaderContainer } from './styled';
type Props = {};

const About = (props: Props) => {
  return (
    <div className='container'>
      <InnerContainer>
        <HeaderContainer>
          <h2 className='about__header' >
            We don’t care just about design. We care about{' '}
            <span>you</span>
          </h2>
        </HeaderContainer>
        <div className='about__text'>
          <BodyText>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vivamus suscipit tortor eget felis porttitor volutpat. Mauris
            blandit aliquet elit, eget tincidunt nibh pulvinar a.Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae;
          </BodyText>
        </div>
      </InnerContainer>
    </div>
  );
};

export default About;
