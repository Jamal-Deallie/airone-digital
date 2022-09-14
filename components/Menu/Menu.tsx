import { useRef, useEffect, useState, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import { MenuBtn, MenuContainer } from './styled';

type MenuProps = {
  Open: boolean;
};

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openShopMenu = useCallback(
    () => setOpenMenu(openMenu => !openMenu),

    [setOpenMenu]
  );

  useIsomorphicLayoutEffect(() => {
    const tl = gsap.timeline();
  }, []);

  return (
    <>
      <MenuBtn role='button'>
        <div className="menu__label">
          <span>Menu</span>
          <span>Close</span>
        </div>
      </MenuBtn>
      <MenuContainer className='menu'>Menu</MenuContainer>
    </>
  );
};

export default Menu;
