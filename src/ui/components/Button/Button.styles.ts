import styled from 'styled-components';
import {
  Disabled,
  Secondary,
  SecondaryDisabled,
} from '@/ui/components/Button/Vairant.styles';
import {
  ButtonVariants,
  isPrimary,
  isSecondary,
} from '@/ui/components/Button/variant';

type ButtonStylesProps = {
  variant: ButtonVariants;
};

export const Button = styled.button<ButtonStylesProps>`
  color: ${props => props.theme.colors.gray.x50};
  background: ${props => props.theme.colors.gray.x900};

  width: 100%;
  border: ${props => props.theme.space.none};
  padding: ${props => props.theme.space.x4};

  transition: background-color 0.2s;
  &:hover {
    background-color: ${props => props.theme.colors.gray.x800};
  }

  ${props => isPrimary(props.variant) && props.disabled && Disabled}

  ${props => isSecondary(props.variant) && Secondary}
  ${props => isSecondary(props.variant) && props.disabled && SecondaryDisabled}
`;
