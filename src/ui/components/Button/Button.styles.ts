import styled from 'styled-components';
import { ButtonVariants } from '@/ui/components';
import { Secondary } from '@/ui/components/Button/Vairant.styles';

type ButtonStylesProps = {
  variant: ButtonVariants;
};

export const Button = styled.button<ButtonStylesProps>`
  color: ${props => props.theme.colors.gray.x50};
  background: ${props => props.theme.colors.gray.x900};

  width: 100%;
  border: 0;
  padding: 4px;

  transition: background-color 0.2s;
  &:hover {
    background-color: ${props => props.theme.colors.gray.x800};
  }

  ${props => props.variant === ButtonVariants.secondary && Secondary}
`;
