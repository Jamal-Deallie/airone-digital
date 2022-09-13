import styled from 'styled-components';
import { PageText } from '../../helpers/PageText';

export const Text = styled(PageText)`
  color: ${props => (props.color ? props.color : props.theme.colors.secondary)};
  font-size: ${props => (props.fontSize ? props.fontSize : '1.6rem')};
  font-family: ${props =>
    props.fontFamily ? props.theme.fontFamily : 'Open Sans, sans-serif'};
  text-align: ${props => props.textAlign && props.textAlign};
`;
