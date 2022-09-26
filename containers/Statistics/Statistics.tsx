import {
  InnerContainer,
  GridContainer,
  DescContainer,
  SubheaderContainer,
  StatFooterContainer,
} from './styled';
import { Header } from '../../components/Header/Header';
import BodyText from '../../components/BodyText/BodyText';
import data from '../../shared/stats.json';
import ColorChange from '../../animations/ColorChange';

type Props = {};

const Statistics = (props: Props) => {
  return (
    <section className='section bg-primary'>
      <div className='container'>
        <SubheaderContainer>
          <Header fontSize='2.41rem' textAlign='center' color={'secondary'}>
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
                  color={'secondary'}>
                  {subheader}
                </Header>
                <div className='stats__desc-cont'>
                  <BodyText>{caption}</BodyText>
                </div>
              </GridContainer>
              <DescContainer reverse={reverse}>
                <Header
                  color={'secondary'}
                  className='stats__stat'
                  fontSize={'clamp(5.25rem, calc(3.79rem + 7.32vw), 25.00rem)'}
                  headingLevel={'h3'}
                  lineHeight={1}>
                  {stat}
                </Header>
              </DescContainer>
            </InnerContainer>
          );
        })}

        {data.slice(2, 3).map(d => {
          const { id, stat, subheader, caption, reverse } = d;
          return (
            <StatFooterContainer key={id}>
              <Header
                color={'secondary'}
                textAlign='center'
                fontSize={'clamp(1.14rem, calc(-9.97rem + 44.45vw), 36.37rem)'}
                lineHeight={1}>
                {stat}
              </Header>
              <div className='stats__desc-cont'>
                <Header
                  color={'secondary'}
                  fontSize={'2.41rem'}
                  headingLevel={'h2'}
                  lineHeight={1}
                  className='service__text'>
                  {subheader}
                </Header>
                <div>
                  <BodyText>{caption}</BodyText>
                </div>
              </div>
            </StatFooterContainer>
          );
        })}
      </div>
    </section>
  );
};

export default Statistics;
