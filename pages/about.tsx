import type { NextPage, GetStaticProps } from 'next';
import Clients from '../containers/Clients/Clients';
import Awards from '../containers/Awards/Awards';
import Statistics from '../containers/Statistics/Statistics';
import Services from '../containers/Services/Services';
import { UseSanitizeResponse } from '../hooks/useSanitizeResponse';
import {
  ServicesResults,
  StatisticsResults,
  ClientResults,
} from '../types/index';

export const getStaticProps: GetStaticProps = async context => {
  const serviceRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services`
  )
    .then(res => res.json())
    .catch(error => {
      console.error(error);
    });

  const statisticRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/statistics`
  )
    .then(res => res.json())
    .catch(error => {
      console.error(error);
    });
  let statData = UseSanitizeResponse(statisticRes.data);

  const clientRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/clients?populate=*`
  )
    .then(res => res.json())
    .catch(error => {
      console.error(error);
    });

  let clientData = UseSanitizeResponse(clientRes.data);

  return {
    props: {
      stats: statData,
      clients: clientData,
    },
  };
};

type AboutProps = {
  services: object;
  stats: any;
  data: object;
  clients: any[];
};

const AboutPage: NextPage = ({ services, stats, clients }: AboutProps) => {
  const statData: StatisticsResults[] = stats;
  const clientData: ClientResults[] = clients;

  return (
    <>
      <Clients />
      <Services />
      <Awards />
      <Statistics data={statData} />
    </>
  );
};

export default AboutPage;
