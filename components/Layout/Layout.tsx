import { ReactNode } from 'react';
import { Wrap, MainContainer } from './styled';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Wrap>
      <Navbar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </Wrap>
  );
};
