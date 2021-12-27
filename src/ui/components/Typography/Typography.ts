import styled from 'styled-components';

export const Text = styled.p`
  color: ${props => props.theme.colors.secondary.brand};
  font-size: ${props => props.theme.font.size.s};
`;

export const Title = styled(Text)`
  font-weight: bold;
  color: ${props => props.theme.colors.primary.brand};
  font-size: ${props => props.theme.font.size.m};
`;
