import { css } from 'styled-components';

export const Secondary = css`
  background-color: transparent;
  color: black;

  border-radius: ${props => props.theme.space.x4};

  &:hover {
    background-color: ${props => props.theme.colors.gray.x200};
  }
`;

export const SecondaryDisabled = css`
  cursor: not-allowed;
  background-color: ${props => props.theme.colors.gray.x200};
  opacity: 90%;

  &:hover {
    background: ${props => props.theme.colors.gray.x200};
  }
`;

export const Disabled = css`
  cursor: not-allowed;

  &:hover {
    background: ${props => props.theme.colors.gray.x900};
  }
`;
