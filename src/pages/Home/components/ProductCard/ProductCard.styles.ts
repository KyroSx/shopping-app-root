import styled, { css } from 'styled-components';
import { Button, Flex } from '@/ui/components';

type CardProps = {
  reduceOpacity?: boolean;
};

export const Container = styled.div``;

export const Card = styled.div<CardProps>`
  margin: ${props => props.theme.space.x12} 0;
  border-radius: ${props => props.theme.space.x6};
  max-width: 500px;

  background: ${props => props.theme.colors.zinc.x200};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.24);

  ${props =>
    props.reduceOpacity &&
    css`
      opacity: 75%;
    `}
`;

export const Content = styled.div`
  gap: ${props => props.theme.space.x12};
  padding: ${props => props.theme.space.x8};
`;

export const Row = styled(Flex.Row)`
  gap: ${props => props.theme.space.x6};

  color: ${props => props.theme.colors.gray.x800};
  margin-top: ${props => props.theme.space.x6};
`;

export const BuyButton = styled(Button)`
  border-radius: ${props =>
    `0 0 ${props.theme.space.x6} ${props.theme.space.x6}`};
  margin-top: ${props => props.theme.space.x8};
`;
