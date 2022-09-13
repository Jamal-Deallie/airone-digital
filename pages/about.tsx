import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { Layout } from '../components/Layout/Layout';


const AboutPage: NextPageWithLayout = () => {
  return <div>About</div>;
};

AboutPage.getLayout = function getLayout(page: ReactElement){
    return (

        <Layout>{page}</Layout>
    )
}
export default AboutPage;
