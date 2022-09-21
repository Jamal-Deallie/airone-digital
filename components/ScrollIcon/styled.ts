import styled, { keyframes } from 'styled-components';

const swipe = keyframes`
  0% {transform: translateY(0px)} 
  100% { transform: translateY(46px);} 
`;

const opacity = keyframes`  
0% {opacity: 1;} 
100% { opacity: 0;} 
`;

export const Container = styled.div`
  width: 40px;
  height: 70px;
  position: relative;
  margin-inline: auto;
`;

export const IconScroll = styled.div`
  position: absolute;
  left: 50%;
  width: 40px;
  height: 70px;
  margin-left: -20px;
  top: 50%;
  margin-top: -35px;
  box-shadow: inset 0 0 0 2px
    ${props => (props.color ? props.color : props.theme.colors.primary)};
  border-radius: 25px;
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: ${props =>
      props.color ? props.color : props.theme.colors.primary};
    margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation: ${swipe} 1.5s infinite, ${opacity} 1.5s infinite;
    position: absolute;
    left: 50%;
  }
`;
