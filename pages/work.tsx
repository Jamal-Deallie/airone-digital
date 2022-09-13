import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { Layout } from '../components/Layout/Layout';

const WorkPage: NextPageWithLayout = () => {
  return (
    <div>work</div>
  )
}

WorkPage.getLayout = function getLayout(page: ReactElement){
  return (

      <Layout>{page}</Layout>
  )
}

export default WorkPage;