import { Header } from '../../components/Header/Header';
import BodyText from '../../components/BodyText/BodyText';
import Image from 'next/image';
import {
  GridContainer,
  ImageContainer,
  DescContainer,
  InnerContainer,
  HeaderContainer,
} from './styled';
import data from '../../shared/team.json';

type Props = {};

function TeamMembers({}: Props) {
  return (
    <section className='bg-primary'>
      <div className='container'>
        <BodyText>
          The nice thing about teamwork is that you always have others…
        </BodyText>
        <HeaderContainer>
          <Header
            color='secondary'
            fontSize={'clamp(2.33rem, calc(1.39rem + 4.70vw), 8rem)'}
            headingLevel={'h2'}
            lineHeight={1}>
            ON
          </Header>
          <Header
            color='secondary'
            fontSize={'clamp(2.33rem, calc(1.39rem + 4.70vw), 8rem)'}
            headingLevel={'h2'}
            lineHeight={1}>
            YOUR
          </Header>
          <Header
            color='secondary'
            fontSize={'clamp(2.33rem, calc(1.39rem + 4.70vw), 8rem)'}
            headingLevel={'h2'}
            lineHeight={1}>
            SIDE
          </Header>
        </HeaderContainer>
        <InnerContainer>
          {data.map(d => {
            const { id, desc, name, image, reverse } = d;
            return (
              <GridContainer key={id}>
                <ImageContainer className='team__emp-cont' reverse={reverse}>
                  <Image
                    className={'landing__ufo'}
                    src={image}
                    alt={name}
                    layout='fill'
                    objectFit='contain'
                  />
                </ImageContainer>
                <DescContainer reverse={reverse}>
                  <Header
                    color='secondary'
                    fontSize={'clamp(2.33rem, calc(1.39rem + 4.70vw), 8rem)'}
                    headingLevel={'h2'}
                    lineHeight={1}>
                    {name}
                  </Header>
                  <Header
                    color='secondary'
                    fontSize='1.953rem'
                    headingLevel={'h3'}>
                    Title
                  </Header>
                  <div className='team__bio-cont'>
                    <BodyText>{desc}</BodyText>
                  </div>
                </DescContainer>
              </GridContainer>
            );
          })}
        </InnerContainer>
      </div>
    </section>
  );
}

export default TeamMembers;
