import styled from 'styled-components';

export const Button = styled.button`
  color: ${props => props.theme.colors.gray.x50};
  background: ${props => props.theme.colors.gray.x900};

  width: 100%;
  border: 0;
  padding: 4px;

  transition: background-color 0.2s;
  &:hover {
    background-color: ${props => props.theme.colors.gray.x800};
  }
`;
