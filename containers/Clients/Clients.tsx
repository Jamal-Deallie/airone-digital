import React from 'react';
import { Header } from '../../components/Header/Header';
import { ClientContainer, ImageContainer } from './styled';
import Image from 'next/image';
import data from '../../shared/clients.json';
type Props = {};

const Clients = (props: Props) => {
  return (
    <section className='section'>
      <div className='container'>
        <div>
          <Header
            fontSize={'clamp(2.33rem, calc(0.85rem + 7.43vw), 9.77rem)'}
            textAlign={'center'}
            headingLevel={'h2'}
            lineHeight={0.9}>
            Trusted
          </Header>
          <Header
            fontSize={'clamp(2.33rem, calc(0.85rem + 7.43vw), 9.77rem)'}
            textAlign={'center'}
            headingLevel={'h2'}
            lineHeight={0.9}>
            BY
          </Header>
        </div>
        <div>
          <ClientContainer>
            {data.map(d => {
              const { client, id, icon } = d;
              return icon ? (
                <ImageContainer key={id}>
                  <Image
                    src={`/icons/${client}.svg`}
                    alt={client}
      
                    layout="fill"
                  />
                </ImageContainer>
              ) : (
                <div key={id}>
                  <Header fontSize='clamp(5.25rem, calc(4.96rem + 1.46vw), 6.00rem)'>{client}</Header>
                </div>
              );
            })}
          </ClientContainer>
        </div>
      </div>
    </section>
  );
};

export default Clients;
