import styled, { css } from 'styled-components';
import { Button, Flex } from '@/ui/components';

const Border = css`
  border: ${props => props.theme.colors.neutral.x300} 1px solid;
  border-radius: ${props => props.theme.space.x4};
`;

export const Container = styled.div``;

export const Card = styled(Flex.Row)`
  align-items: center;
  gap: ${props => props.theme.space.x6};

  ${Border}
`;

export const Content = styled.div`
  padding: ${props => props.theme.space.x4};
  width: 100%;
`;

export const Image = styled.div`
  height: 72px;
  width: 72px;

  background: ${props => props.theme.colors.neutral.x400};

  border-radius: ${props =>
    `${props.theme.space.x4} 0 0 ${props.theme.space.x4}`};
`;

export const Row = styled(Flex.Row)`
  justify-content: space-between;
  margin-top: ${props => props.theme.space.x6};
  gap: ${props => props.theme.space.x6};

  color: ${props => props.theme.colors.secondary.brand};
`;

export const ButtonContainer = styled(Flex.Column)`
  justify-content: flex-end;
`;

export const AddButton = styled(Button)`
  width: 32px;
  ${Border}
`;

export const RemoveButton = styled(Button)`
  width: 32px;
  ${Border}
`;
