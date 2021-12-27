import { css } from 'styled-components';
import { Colors } from '@/ui/colors';

export const Secondary = css`
  background-color: transparent;
  color: ${props => props.theme.colors.primary.brand};

  border-radius: ${props => props.theme.space.x4};

  &:hover {
    background-color: ${props =>
      Colors.addShade(props.theme.colors.zinc.x250, 0.2)};
  }
`;

export const SecondaryDisabled = css`
  cursor: not-allowed;
  color: ${props => props.theme.colors.gray.x600};
  background-color: ${props => props.theme.colors.neutral.x400};
  opacity: 70%;

  &:hover {
    background: ${props => props.theme.colors.neutral.x400};
  }
`;

export const Disabled = css`
  cursor: not-allowed;

  &:hover {
    background: ${props => props.theme.colors.primary.brand};
  }
`;
