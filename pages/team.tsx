import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { Layout } from '../components/Layout/Layout';
import TeamMembers from '../containers/Team/Team';

const TeamsPage: NextPageWithLayout = () => {
  return <TeamMembers />;
};

TeamsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default TeamsPage;
