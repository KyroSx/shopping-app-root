import styled, { css } from 'styled-components';
import { Button, Flex } from '@/ui/components';

type CardProps = {
  reduceOpacity?: boolean;
};

export const Container = styled.div``;

export const Image = styled.div`
  width: 100%;
  height: 90px;

  background: ${props => props.theme.colors.neutral.x500};

  border-radius: ${props =>
    `${props.theme.space.x4} ${props.theme.space.x4} 0 0`};
`;

export const Card = styled.div<CardProps>`
  margin: ${props => props.theme.space.x12} 0;
  border-radius: ${props => props.theme.space.x6};
  max-width: 300px;

  background: ${props => props.theme.colors.zinc.x200};

  transition: opacity 0.4s;
  ${props =>
    props.reduceOpacity &&
    css`
      opacity: 75%;
    `}
`;

export const Content = styled.div`
  gap: ${props => props.theme.space.x12};
  padding: ${props => props.theme.space.x12};
`;

export const Row = styled(Flex.Row)`
  gap: ${props => props.theme.space.x6};

  color: ${props => props.theme.colors.secondary.brand};
  margin-top: ${props => props.theme.space.x6};
`;

export const BuyButton = styled(Button)`
  border-radius: ${props =>
    `0 0 ${props.theme.space.x6} ${props.theme.space.x6}`};
  margin-top: ${props => props.theme.space.x8};
`;
