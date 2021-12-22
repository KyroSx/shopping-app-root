import styled from 'styled-components';
import { shade } from 'polished';

export const Button = styled.button`
  color: white;
  background: #333333;

  width: 100%;
  border: 0;
  padding: 4px;

  transition: background-color 0.2s;
  &:hover {
    background-color: ${shade(0.2, '#333333')};
  }
`;
