import styled from 'styled-components';
import { Money } from '@/ui/components';

export const Card = styled.div`
  padding: 8px;
  margin: 12px 0;
  border-radius: 6px;
  max-width: 300px;

  background: lightgrey;
`;

export const Content = styled.div`
  gap: 8px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 18px;
`;

export const Price = styled(Money)`
  color: #efefef;
`;

export const Available = styled.p``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
