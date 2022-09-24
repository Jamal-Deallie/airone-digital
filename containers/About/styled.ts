import styled from 'styled-components';

export const Section = styled.section`
  padding: var(--space-3xl) 0;
`;

export const InnerContainer = styled.div`
  position: relative;
  max-width: 85rem;

  .lines {
    font-size: clamp(2.33rem, calc(1.39rem + 4.7vw), 8rem);
    line-height: 1;
  }
  .about__text {
    margin-top: var(--space-xl);
    max-width: 50rem;
  }
`;

export const HeaderContainer = styled.div`
  .about__header {
    font-size: clamp(2.33rem, calc(1.39rem + 4.7vw), 8rem);
    line-height: 1;
    ${props => props.theme.fontFamily.heading};
    color: ${props => props.theme.colors.primary};
  }
`;
