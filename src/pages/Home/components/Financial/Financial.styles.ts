import styled from 'styled-components';
import { Flex } from '@/ui/components';

export const Financial = styled(Flex.Column)`
  padding: ${props => `${props.theme.space.x8} ${props.theme.space.x12}`};
  margin-bottom: ${props => props.theme.space.x12};
`;

export const Total = styled(Flex.Row)`
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
`;
