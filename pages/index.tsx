import Landing from '../containers/Landing/Landing';
import Showreel from '../containers/Showreel/Showreel';
import Services from '../containers/Services/Services';
import Contact from '../containers/Contact/Contact';
import About from '../containers/About/About';
import ServiceTitle from '../containers/ServiceTitle/ServiceTitle';
const HomePage = () => {
  return (
    <div>
      <Landing />
      <About />
      <ServiceTitle />
      <Services />
      <Showreel />
      <Contact />
    </div>
  );
};

export default HomePage;
