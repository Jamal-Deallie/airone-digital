import { Header } from '../../components/Header/Header';
import { InnerContainer, Section } from './styled';
import BodyText from '../../components/BodyText/BodyText';
type Props = {};

const About = (props: Props) => {
  return (
    <section className='section'>
      <div className='container'>
        <InnerContainer>
          <Header
            fontSize={'clamp(2.33rem, calc(1.39rem + 4.70vw), 8rem)'}
            headingLevel={'h2'}
            lineHeight={1}>
            We don’t care just about design. We care about you.
          </Header>
          <div className='about__text'>
            <BodyText>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Vivamus suscipit tortor eget felis porttitor volutpat. Mauris
              blandit aliquet elit, eget tincidunt nibh pulvinar a.Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia Curae;
            </BodyText>
          </div>
        </InnerContainer>
      </div>
    </section>
  );
};

export default About;
