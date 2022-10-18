import type { NextPage } from 'next';
import Landing from '../containers/Landing/Landing';
import Showreel from '../containers/Showreel/Showreel';
import Ads from '../containers/Ads/Ads';
import Contact from '../containers/CTA/CTA';
import About from '../containers/About/About';
import ServiceTitle from '../containers/ServiceTitle/ServiceTitle';
import Founder from '../containers/Founder/Founder';

const HomePage: NextPage = () => {
  return (
    <>
      <Landing />
      <About />
      <Founder />
      <ServiceTitle />
      <Ads />
      <Showreel />
      <Contact />
    </>
  );
};

export default HomePage;
