import { useRef, useEffect } from 'react';
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from 'react-locomotive-scroll';
import { gsap } from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { ReactNode } from 'react';
import { Wrap, MainContainer } from './styled';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import styles from '../styles/Locomotive-scroll.module.css';
gsap.registerPlugin(ScrollTrigger);

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
