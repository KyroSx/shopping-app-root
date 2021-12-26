import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${props => props.theme.font.size.s};
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: ${props => props.theme.font.size.m};
`;
