import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { Layout } from '../components/Layout/Layout';

const TeamsPage: NextPageWithLayout = () => {
  return <div>Teams</div>;
};

TeamsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default TeamsPage;
