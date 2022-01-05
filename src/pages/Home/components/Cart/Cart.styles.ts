import styled from 'styled-components';
import { Flex } from '@/ui/components';

export const Container = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.space.x6};

  background: ${props => props.theme.colors.zinc.x250};
  border-radius: ${props => props.theme.space.x4};
`;

export const Header = styled(Flex.Center)`
  background: ${props => props.theme.colors.neutral.x500};
  height: 48px;

  padding: ${props => props.theme.space.x6};
  border-radius: ${props =>
    `${props.theme.space.x4} ${props.theme.space.x4} 0 0`};

  p {
    font-size: ${props => props.theme.font.size.l};
  }
`;

export const List = styled(Flex.Column)`
  padding: ${props => `${props.theme.space.x8} ${props.theme.space.x14}`};
`;
