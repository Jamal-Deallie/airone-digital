import { useRef, useEffect, useState, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import Link from 'next/link';
import data from '../../shared/links.json';
import styles from '../../styles/menu.module.css';

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

    tl.current
      .to('#cont', {
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
      <div
        role='button'
        id='btn'
        onClick={openShopMenu}
        className={styles['menu-btn']}>
        <div className={styles['menu-label']} id='label'>
          <span>Menu</span>
          {/* <span>Close</span> */}
        </div>
      </div>

      <div className={styles['menu-cont']} id='cont'>
        <div className={styles.layer} id='layer'>
          <div className={styles.overlay} id='overlay'>
            <ul className={styles['link-cont']}>
              {data.map(d => {
                const { id, label, href } = d;
                return (
                  <li
                    key={id}
                    className={styles['menu-link']}
                    onClick={openShopMenu}
                    id='link'>
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
