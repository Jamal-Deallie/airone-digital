import React from 'react';
import { Header } from '../../components/Header/Header';
import { ClientContainer } from './styled';
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
                <div key={id}>
                  <Image
                    src={`/icons/${client}.svg`}
                    alt={client}
                    width={25}
                    height={25}
                  />
                </div>
              ) : (
                <div key={id}>
                  <Header fontSize='2.41rem'>{client}</Header>
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
