import type { NextPage, GetStaticProps } from 'next';
import Clients from '../containers/Clients';
import Awards from '../containers/Awards';
import Statistics from '../containers/Statistics';
import Services from '../containers/Services';
import { StatisticsResults, ClientResults } from '../typings';

type Props = {
  stats: StatisticsResults[];
  clients: ClientResults[];
};

const AboutPage: NextPage = ({ stats, clients }: Props) => {
  return (
    <>
      <Clients clients={clients} />
      <Services />
      <Awards />
      <Statistics stats={stats} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const statisticRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/statistics`
  )
    .then(res => res.json())
    .catch(error => {
      console.error(error);
    });

  const clientRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/clients?populate=*`
  )
    .then(res => res.json())
    .catch(error => {
      console.error(error);
    });

  return {
    props: {
      stats: statisticRes.data,
      clients: clientRes.data,
    },
  };
};

export default AboutPage;
