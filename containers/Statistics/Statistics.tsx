import {
  InnerContainer,
  GridContainer,
  DescContainer,
  SubheaderContainer,
} from './styled';
import { Header } from '../../components/Header/Header';
import BodyText from '../../components/BodyText/BodyText';
import data from '../../shared/stats.json';

type Props = {};

const Statistics = (props: Props) => {
  return (
    <section className='section'>
      <div className='container'>
        <SubheaderContainer>
          <Header fontSize='2.41rem' textAlign='center'>
            We design, build and ship world-class digital products for
            forward-thinking brands
          </Header>
        </SubheaderContainer>
        {data.slice(0, 2).map(d => {
          const { id, stat, subheader, caption, reverse } = d;
          return (
            <InnerContainer key={id}>
              <GridContainer className='stats__grid-cont' reverse={reverse}>
                <Header
                  fontSize={'2.41rem'}
                  headingLevel={'h2'}
                  lineHeight={1}
                  className='service__text'>
                  {subheader}
                </Header>
                <div className='stats__desc-cont'>
                  <BodyText>{caption}</BodyText>
                </div>
              </GridContainer>
              <DescContainer reverse={reverse}>
                <Header
                  className='stats__stat service__text'
                  fontSize={'clamp(7.28rem, calc(5.45rem + 7.30vw), 14.21rem)'}
                  headingLevel={'h3'}>
                  {stat}
                </Header>
              </DescContainer>
            </InnerContainer>
          );
        })}

        {data.slice(2, 3).map(d => {
          const { id, stat, subheader, caption, reverse } = d;
          return (
            <div key={id}>
              <Header
                color='secondary'
                textAlign='center'
                fontSize={'clamp(2.98rem, calc(-3.54rem + 26.08vw), 27.76rem)'}
                lineHeight={1}>
                {stat}
              </Header>
              <div className='stats__desc-cont'>
                <Header
                  fontSize={'2.41rem'}
                  headingLevel={'h2'}
                  lineHeight={1}
                  className='service__text'>
                  {subheader}
                </Header>
                <div className='stats__desc-cont'>
                  <BodyText>{caption}</BodyText>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Statistics;
