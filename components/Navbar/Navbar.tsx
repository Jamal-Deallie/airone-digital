import Menu from '../../components/Menu/Menu';
import { StyledNav, Logo, InnerContainer } from './styled';
import Link from 'next/link';
type Props = {
  color?: string;
};

export const Navbar = () => {
  return (
    <StyledNav>
      <InnerContainer>
        <Menu />
        <Link href='/'>
          <a>
            <Logo>Airone</Logo>
          </a>
        </Link>
      </InnerContainer>
    </StyledNav>
  );
};
