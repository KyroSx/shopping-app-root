import styled from 'styled-components';

export const Input = styled.input`
  border-radius: ${props => props.theme.space.x2};
  border: ${props => props.theme.colors.primary.light} 1px solid;

  width: 100%;
  padding: ${props => `${props.theme.space.x6} ${props.theme.space.x8}`};
`;
