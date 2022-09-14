import Menu from '../../components/Menu/Menu';
import { StyledNav, Logo, InnerContainer } from './styles';

type Props = {
  color?: string;
};

export const Navbar = () => {
  return (
    <StyledNav>
      <InnerContainer>
        <Menu />
        <Logo>Airone</Logo>
      </InnerContainer>
    </StyledNav>
  );
};
