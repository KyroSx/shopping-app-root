import styled, { css } from 'styled-components';
import { Button } from '@/ui/components';

const Border = css`
  border: ${props => props.theme.colors.neutral.x300} 1px solid;
  border-radius: ${props => props.theme.space.x4};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
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

  background: ${props => props.theme.colors.neutral.x300};

  border-radius: ${props =>
    `${props.theme.space.x4} 0 0 ${props.theme.space.x4}`};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${props => props.theme.space.x6};

  color: ${props => props.theme.colors.gray.x800};
  margin-top: ${props => props.theme.space.x6};

  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
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
