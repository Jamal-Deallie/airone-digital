import type { NextPage, GetStaticProps } from 'next';
import Clients from '../containers/Clients/Clients';
import Awards from '../containers/Awards/Awards';
import Statistics from '../containers/Statistics/Statistics';
import Services from '../containers/Services/Services';
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


  let statItems = statisticRes.data.reduce((acc: object[] = [], curr: any) => {
    const item = {
      id: curr.id,
      stat: curr.stat,
      title: curr.title,
      desc: curr.desc,
    };
    acc.push(item);
    return acc;
  }, []);

  const clientRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/clients?populate=*`
  )
    .then(res => res.json())
    .catch(error => {
      console.error(error);
    });



  return {
    props: {
      stats: statItems,
      clients: clientRes,
    },
  };
};

type Props = {
  stats: StatisticsResults[];
};

const AboutPage: NextPage = ({ stats }: Props) => {
  return (
    <>
      <Clients />
      <Services />
      <Awards />
      <Statistics stats={stats} />
    </>
  );
};

export default AboutPage;
