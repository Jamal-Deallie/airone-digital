import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Landing from '../containers/Landing';
// import Showreel from '../containers/Showreel';
import Ads from '../containers/Ads';
import Contact from '../containers/CTA';
import About from '../containers/About';
import ServiceTitle from '../containers/BigTitle';
import Founder from '../containers/Founder';

const HomePage: NextPage = () => {
  const ShowReel = dynamic(() => import('@/containers/Showreel'), {
    suspense: true,
  });

  return (
    <>
      <Landing />
      <About />
      <Founder />
      <ServiceTitle />
      <Ads />
      <Suspense fallback={<div>Loading...</div>}>
        <ShowReel />
      </Suspense>
      <Contact />
    </>
  );
};

export default HomePage;
