import { useRef, useEffect, useState, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import { MenuBtn, MenuContainer } from './styled';
import Link from 'next/link';
import { Header } from '../../components/Header/Header';
import data from '../../shared/links.json';

type MenuProps = {
  Open: boolean;
};

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const tl = useRef(null);
  const openShopMenu = useCallback(
    () => setOpenMenu(openMenu => !openMenu),

    [setOpenMenu]
  );

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({ pause: true });
    let targets = gsap.utils.toArray(['.menu__layer', '.menu__overlay']);
    let links = gsap.utils.toArray('.menu__link');

    tl.current
      .to('.menu__main', {
        duration: 0.1,
        css: { display: 'block' },
      })
      .fromTo(
        targets,
        { skewY: 2, yPercent: -110 },
        {
          duration: 0.9,
          transformOrigin: 'right top',
          skewY: 0,
          yPercent: 0,
          ease: 'power3.inOut',
          stagger: {
            amount: 0.3,
          },
        }
      )
      .fromTo(
        links,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          stagger: {
            amount: 0.3,
          },
        }
      );
  }, []);

  useEffect(() => {
    openMenu ? tl.current.play() : tl.current.reverse();
    if (openMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [tl, openMenu]);

  return (
    <>
      <MenuBtn role='button' id='btn' onClick={openShopMenu}>
        <div className='menu__label' id='label'>
          <span>Menu</span>
          <span>Close</span>
        </div>
      </MenuBtn>

      <MenuContainer className='menu__main'>
        <div className='menu__layer'>
          <div className='menu__overlay'>
            <ul>
              {data.map(d => {
                const { id, label, href, fontSize, color, cn } = d;
                return (
                  <li key={id} className={cn}>
                    <Link href={href}>
                      <a>
                        <Header
                          fontSize={fontSize}
                          color={color}
                          lineHeight={1}>
                          {label}
                        </Header>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* <div className='menu__secondary'>
              <Header color='secondary' headingLevel={'h2'} fontSize='2.41rem'>
                Sign up to our newsletter
              </Header>

              <form action='#' method='post'>
                <input type='email' />
                <button>Submit</button>
              </form>

              <div className='menu__flex-cont'>
                <BodyText fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)'>
                  AirOne Digital
                </BodyText>
                <BodyText fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)'>
                  123 Main Street
                </BodyText>
                <BodyText fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)'>
                  Dallas, TX 75202
                </BodyText>
                <BodyText fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)'>
                  P: 123-123-4567
                </BodyText>
                <BodyText fontSize='clamp(1.17rem, calc(1.07rem + 0.41vw), 1.56rem)'>
                  E: questions@airone.com
                </BodyText>
              </div>
              <div className='link-cont'>
                <Link href='/'>
                  <a>
                    <BodyText fontWeight={800} fontSize={'1.6rem'}>
                      DRIBBLE
                    </BodyText>
                  </a>
                </Link>
                <BodyText fontWeight={800} fontSize={'1.6rem'}>
                  •
                </BodyText>
                <Link href='/'>
                  <a>
                    <BodyText fontWeight={800} fontSize={'1.6rem'}>
                      INSTAGRAM
                    </BodyText>
                  </a>
                </Link>
                <BodyText fontWeight={800} fontSize={'1.6rem'}>
                  •
                </BodyText>
                <Link href='/'>
                  <a>
                    <BodyText fontWeight={800} fontSize={'1.6rem'}>
                      BEHANCE
                    </BodyText>
                  </a>
                </Link>
                <BodyText fontWeight={800} fontSize={'1.6rem'}>
                  •
                </BodyText>
                <Link href='/'>
                  <a>
                    <BodyText fontWeight={800} fontSize={'1.6rem'}>
                      TIK TOK
                    </BodyText>
                  </a>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </MenuContainer>
    </>
  );
};

export default Menu;
