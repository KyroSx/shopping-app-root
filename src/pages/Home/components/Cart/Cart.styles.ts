import styled from 'styled-components';
import { Flex } from '@/ui/components';

export const Container = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.space.x6};

  background: ${props => props.theme.colors.zinc.x200};
  border-radius: ${props => props.theme.space.x4};
`;

export const Header = styled.div`
  background: ${props => props.theme.colors.zinc.x400};
  text-align: center;
  font-size: ${props => props.theme.font.size.l};
  height: 40px;

  padding: ${props => props.theme.space.x6};
  border-radius: ${props =>
    `${props.theme.space.x4} ${props.theme.space.x4} 0 0`};
`;

export const List = styled(Flex.Column)`
  padding: ${props => `${props.theme.space.x8} ${props.theme.space.x14}`};
`;
