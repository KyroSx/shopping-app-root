import styled from 'styled-components';
import { Button } from '@/ui/components';

export const Card = styled.div`
  margin: ${props => props.theme.space.x12} 0;
  border-radius: ${props => props.theme.space.x6};
  max-width: 300px;

  background: ${props => props.theme.colors.zinc.x200};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.24);
`;

export const Content = styled.div`
  gap: ${props => props.theme.space.x12};
  padding: ${props => props.theme.space.x8};
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: ${props => props.theme.font.size.m};
`;

export const Available = styled.p``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${props => props.theme.space.x6};

  color: ${props => props.theme.colors.gray.x800};
  margin-top: ${props => props.theme.space.x6};
`;

export const BuyButton = styled(Button)`
  border-radius: 0 0 6px 6px;
  margin-top: ${props => props.theme.space.x8};
`;
