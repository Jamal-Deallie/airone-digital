import { SubheaderContainer, AwardContainer } from './styled';
import { Header } from '../../components/Header/Header';
import Image from 'next/image';
import data from '../../shared/awards.json';
import ColorChange from '../../animations/ColorChange';
type Props = {};

const Awards = (props: Props) => {
  return (
    <ColorChange
      bgColor='#AC7EF3'
      ftTarget={'.awards__text'}
      ftColor={'#1A1B1D'}>
      <div className='container'>
        <SubheaderContainer>
          <Header
            fontSize='2.41rem'
            textAlign='center'
            className='awards__text'
            headingLevel={'h3'}>
            Lorem ipsum dolor sit amet, consectetur lacus tristique rutrum.
            Vestibulum vulputate felis quis dolor lacinia pretium.
          </Header>
        </SubheaderContainer>
        <AwardContainer>
          {data.map(d => {
            const { image, id, award } = d;
            return (
              <div className='awards__img-cont' key={id}>
                <Image
                  src={image}
                  alt={`${award}-icon`}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            );
          })}
        </AwardContainer>
      </div>
    </ColorChange>
  );
};

export default Awards;
