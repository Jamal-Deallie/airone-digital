import { SubheaderContainer, AwardContainer } from './styled';
import { Header } from '../../components/Header/Header';
import Image from 'next/image';
import data from '../../shared/awards.json';
type Props = {};

const Awards = (props: Props) => {
  return (
    <section className='section'>
      <div className='container'>
        <SubheaderContainer>
          <Header fontSize='2.41rem' textAlign='center'>
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
    </section>
  );
};

export default Awards;
