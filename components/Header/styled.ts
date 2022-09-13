import styled from 'styled-components';
import PageHeading from '../../helpers/PageHeading';

export const HeadingText = styled(PageHeading)`
  color: ${props => (props.color ? props.color : props.theme.colors.primary)};
  font-size: ${props => (props.fontSize ? props.fontSize : '7.451rem')};
  font-family: Headline, sans-serif;
  text-align: ${props => props.textAlign && props.textAlign};
  line-height: ${props => props.lineHeight && props.lineHeight};
`;
