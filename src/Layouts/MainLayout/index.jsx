import { useState, useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import {
  StyledLayout,
  ContentContainer,
  SmoothContent,
  NavContainer,
  FooterContainer,
  FooterInner,
  SmoothWrapper,
  Spacer,
} from './styles';
import { Navigation } from '../../Components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SmootherContext } from '../../Context/ SmootherContext';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

export default function MainLayout() {
  let [smoother, setSmoother] = useState();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1,
      normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
      ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
      effects: true,
      preventDefault: true,
    });

    setSmoother(smoother);
  }, [smoother, setSmoother]);

  return (
    <ContentContainer>
      <NavContainer>
        <Navigation />
      </NavContainer>
      <SmootherContext.Provider value={smoother}>
        <SmoothWrapper id='smooth-wrapper'>
          <SmoothContent id='smooth-content'>
            <Outlet />
            <Spacer />
          </SmoothContent>
        </SmoothWrapper>
      </SmootherContext.Provider>
    </ContentContainer>
  );
}