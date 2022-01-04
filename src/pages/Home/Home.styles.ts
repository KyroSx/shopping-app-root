import styled from 'styled-components';
import { Flex, Button } from '@/ui/components';

export const Container = styled.div`
  padding: ${props => props.theme.space.x6};

  width: 100%;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 12px;
`;

export const CartContainer = styled(Flex.Column)`
  gap: 0 ${props => props.theme.space.x6};
`;

export const CheckoutButton = styled(Button)`
  padding: ${props => props.theme.space.x12};
  font-size: ${props => props.theme.font.size.ml};

  margin-top: ${props => props.theme.space.x14};
`;
