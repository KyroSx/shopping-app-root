import styled from 'styled-components';
import { Title as DefaultTitle } from '@/ui/components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: ${props => props.theme.colors.zinc.x200};

  padding: ${props => props.theme.space.x12};
`;

export const Title = styled(DefaultTitle)`
  font-size: ${props => props.theme.font.size.l};
  margin-left: 18px;
`;
