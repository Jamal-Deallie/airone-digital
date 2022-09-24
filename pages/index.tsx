import Landing from '../containers/Landing/Landing';
import Showreel from '../containers/Showreel/Showreel';
import Services from '../containers/Services/Services';
import Contact from '../containers/Contact/Contact';
import dynamic from 'next/dynamic';
const About = dynamic(() => import('../containers/About/About'), {
  ssr: false,
});

const HomePage = () => {
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

export default HomePage;
