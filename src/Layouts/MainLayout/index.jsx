import { useState, useLayoutEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import {
  ContentContainer,
  SmoothContent,
  NavContainer,
  SmoothWrapper,
  Spacer,
} from './styles';
import { Navigation } from '../../Components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SmootherContext } from '../../Context/ SmootherContext';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import useWindowSize from '../../Hooks/useWindowSize';
import { Observer } from 'gsap/Observer';

export default function MainLayout() {
  let [smoother, setSmoother] = useState();
  const tl = useRef();
  const bg = useRef();
  const el = useRef();
  const { innerWidth, innerHeight } = useWindowSize();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Observer, ScrollSmoother);

    for (let i = 0; i < 99; i++) {
      const d = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'circle'
      );
      gsap.set(d, {
        attr: { class: 'dot dot' + i, cx: 2.5, cy: 2.5, r: 2.5 },
        x: gsap.utils.random(0, innerWidth, 1),
        y: gsap.utils.random(0, innerHeight, 1),
        scale: gsap.utils.random(0.2, 1),
      });
      bg.current.appendChild(d);
    }

    const dots = document.querySelectorAll('.dot');
    tl.current = gsap.timeline();
    tl.current.to(
      el.current,
      { backgroundColor: '#111', ease: 'power1.inOut' },
      '-=1'
    );

    Observer.create({
      target: window,
      type: 'wheel,touch,scroll,pointer',
      onUp: () => up(),
      onDown: () => down(),
    });

    function up() {
      dots.forEach(d => {
        if (gsap.getProperty(d, 'y') > innerHeight)
          gsap.set(d, { y: gsap.utils.random(-1, -99) });
        else gsap.to(d, { y: '+=' + 100 * gsap.getProperty(d, 'scale') });
      });
    }

    function down() {
      dots.forEach(d => {
        if (gsap.getProperty(d, 'y') < 0)
          gsap.set(d, { y: gsap.utils.random(innerHeight, innerHeight + 99) });
        else gsap.to(d, { y: '-=' + 100 * gsap.getProperty(d, 'scale') });
      });
    }

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
  }, [smoother, setSmoother, innerHeight, innerWidth]);

  return (
    <ContentContainer ref={el}>
      <svg
        id='bg-layout'
        className='svg'
        ref={bg}
        width='100%'
        height='100%'
        xmlns='http://www.w3.org/2000/svg'
        fill='#fff'></svg>
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
