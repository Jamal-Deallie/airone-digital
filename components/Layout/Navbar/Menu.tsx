import { useRef, useEffect, useState, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import Link from 'next/link';
import data from '@/shared/links.json';
import styles from '@/styles/components/menu.module.scss';

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
    let targets = gsap.utils.toArray(['#layer', '#overlay']);
    let links = gsap.utils.toArray('#link');
    let ctx = gsap.context(() => {
      tl.current
        .to('#cont', {
          duration: 0.1,
          css: { display: 'block' },
        })
        .to('#menuBtnDiv', {
          duration: 0.2,
          y: 50,
        })
        .fromTo(
          '#menuBtnDiv2',
          {
            duration: 0.2,
            y: -100,
          },
          {
            y: -25,
          },
          '-=.15'
        )
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
          },
          '-=50%'
        )
        .fromTo(
          links,
          { yPercent: 100, opacity: 0 },
          {
            duration: 0.5,
            yPercent: 0,
            opacity: 1,
            stagger: {
              amount: 0.2,
            },
          }
        ),
        '+=1.5';
    });

    return () => ctx.revert();
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
      <div role='button' id='btn' onClick={openShopMenu} className={styles.btn}>
        <div id='label'>
          <span id='menuBtn'>
            <div id='menuBtnDiv'>MENU</div>
            <div id='menuBtnDiv2'>CLOSE</div>
          </span>
        </div>
      </div>

      <div className={styles.menu} id='cont'>
        <div className={styles.layer} id='layer'>
          <div className={styles.overlay} id='overlay'>
            <ul>
              {data.map(d => {
                const { id, label, href } = d;
                return (
                  <li key={id} onClick={openShopMenu} id='link'>
                    <Link href={href}>
                      <a>{label}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
