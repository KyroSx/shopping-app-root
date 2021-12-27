import styled from 'styled-components';
import { Row, Text as DefaultText } from '@/ui/components';

export const Container = styled(Row)`
  gap: 10px;
  align-items: center;

  margin-right: 18px;
`;

export const Image = styled.div`
  font-size: ${props => props.theme.font.size.ml};
  border-radius: 50%;

  height: 32px;
  width: 32px;

  background: ${props => props.theme.colors.primary.light};
`;

export const Text = styled(DefaultText)`
  font-size: ${props => props.theme.font.size.m};
`;
