import { StyledNav, Logo, InnerContainer } from './styles';

type Props = {
  color?: string;
};

export const Navbar = () => {
  return (
    <StyledNav>
      <InnerContainer>
        <button>menu</button>
        <Logo>Airone</Logo>
      </InnerContainer>
    </StyledNav>
  );
};
