import type { ReactElement, Fragment } from 'react';
import type { NextPageWithLayout } from './_app';
import { Layout } from '../components/Layout/Layout';
import Landing from '../containers/Landing/Landing';
import About from '../containers/About/About';
import Showreel from '../containers/Showreel/Showreel';
import Services from '../containers/Services/Services';
import Contact from '../containers/Contact/Contact';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Landing />
      <About />
      <Showreel />
      <Services />
      <Contact />
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
