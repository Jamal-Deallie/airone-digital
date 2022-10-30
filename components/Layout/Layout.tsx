import { ReactNode } from 'react';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='layout'>
      <Navbar />
      <div className='min-height'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
