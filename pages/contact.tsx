import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { Layout } from '../components/Layout/Layout';
import ContactForm from '../containers/ContactForm/ContactForm';

const ContactPage: NextPageWithLayout = () => {
  return <ContactForm />;
};

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default ContactPage;
