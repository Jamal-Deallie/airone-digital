import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { Layout } from '../components/Layout/Layout';



const ContactPage : NextPageWithLayout = () => {
  return <p>ContactPage</p>;
};

ContactPage.getLayout = function getLayout(page: ReactElement){
  return (

      <Layout>{page}</Layout>
  )
}
export default ContactPage;
