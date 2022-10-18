import React from 'react';
import { Header } from '../../components/Header/Header';
import { ClientContainer, ImageContainer, Section } from './styled';
import Image from 'next/image';
import data from '../../shared/clients.json';
type ClientProps = { data: any[] };

const Clients = ({ data }: ClientProps) => {
  console.log(data);
  let test = data[1];

  console.log(test.image.data);
  return (
    <Section>
      <div className='container'>
        <div className='main-header'>
          <h1>Our</h1>
          <h1>Clients</h1>
        </div>
        <div>
          <ClientContainer>
            {data.map(({ id, image, icon, client, slug }) => {
              // const { url} = image?.data?.attributes;

              return image.data === null ? (
                <div key={id} className='client name__cont'>
                  <h3>{client}</h3>
                </div>
              ) : (
                <ImageContainer
                  className='client img__cont'
                  aspect={
                    `${image?.data?.attributes.width}` +
                    '/' +
                    `${image?.data?.attributes.height}`
                  }>
                  <Image
                    key={id}
                    src={
                      `${process.env.NEXT_PUBLIC_STRAPI_URL}` +
                      image?.data?.attributes.url
                    }
                    alt={client}
                    layout='fill'
                  />
                </ImageContainer>
              );
            })}
          </ClientContainer>
        </div>
      </div>
    </Section>
  );
};

export default Clients;
