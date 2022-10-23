import { ReactNode } from 'react';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
;

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
