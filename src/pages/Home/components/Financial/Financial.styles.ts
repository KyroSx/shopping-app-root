import styled from 'styled-components';
import { Flex } from '@/ui/components';

export const Container = styled(Flex.Column)`
  padding: ${props => `${props.theme.space.x8} ${props.theme.space.x12}`};
  margin-bottom: ${props => props.theme.space.x12};
`;

export const Line = styled.hr`
  margin: 12px 0;
  border: ${props => props.theme.colors.neutral.x300} 1px solid;
  border-radius: ${props => props.theme.space.x4};
`;

export const FinancialInfo = styled(Flex.Row)`
  justify-content: space-between;
  align-items: center;
`;

export const Total = styled(FinancialInfo)`
  font-weight: bold;
`;
