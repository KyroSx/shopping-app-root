import styled from 'styled-components';
import { Colors } from '@/ui/colors';

export const Button = styled.button`
  color: white;
  background: #333333;

  width: 100%;
  border: 0;
  padding: 4px;

  transition: background-color 0.2s;
  &:hover {
    background-color: ${Colors.addShade('#333333', 0.2)};
  }
`;
