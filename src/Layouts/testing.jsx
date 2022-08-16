import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import {
  StyledLayout,
  ContentContainer,
  SmoothContent,
  NavContainer,
  FooterContainer,
  FooterInner,
} from './MainLayout/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SmootherContext } from '../context/ SmootherContext';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

export default function Layout() {
  let [smoother, setSmoother] = useState();

  useIsomorphicLayoutEffect(() => {
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
  }, []);

  return (
    <StyledLayout>
      {/* <NavContainer>
        <Box sx={{ position: 'fixed' }}>
          <Typography sx={{ color: 'white' }}>Nav Example</Typography>
        </Box>
      </NavContainer> */}
      <ContentContainer>
        <SmootherContext.Provider value={smoother}>
          <Box id='smooth-wrapper'>
            <SmoothContent id='smooth-content'>
              <Outlet />
            </SmoothContent>
          </Box>
        </SmootherContext.Provider>
      </ContentContainer>
    </StyledLayout>
  );
}
