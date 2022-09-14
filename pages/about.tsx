import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { Layout } from '../components/Layout/Layout';
import Clients from '../containers/Clients/Clients';
import Awards from '../containers/Awards/Awards';
import Statistics from '../containers/Statistics/Statistics';

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <Clients />
      <Awards />
      <Statistics />
    </>
  );
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default AboutPage;
