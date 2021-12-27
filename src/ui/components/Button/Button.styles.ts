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
import { Colors } from '@/ui/colors';

type ButtonStylesProps = {
  variant: ButtonVariants;
};

export const Button = styled.button<ButtonStylesProps>`
  color: ${props => props.theme.colors.gray.x50};
  background: ${props => props.theme.colors.primary.brand};

  width: 100%;
  border: ${props => props.theme.space.none};
  border-radius: ${props => props.theme.space.x6};
  padding: ${props => props.theme.space.x4};

  transition: background-color 0.2s;
  &:hover {
    background-color: ${props =>
      Colors.addShade(props.theme.colors.primary.brand, 0.2)};
  }

  ${props => isPrimary(props.variant) && props.disabled && Disabled}

  ${props => isSecondary(props.variant) && Secondary}
  ${props => isSecondary(props.variant) && props.disabled && SecondaryDisabled}
`;
