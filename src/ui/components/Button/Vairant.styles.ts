import { css } from 'styled-components';

export const Secondary = css`
  background-color: transparent;
  color: black;

  border-radius: ${props => props.theme.space.x4};

  &:hover {
    background-color: ${props => props.theme.colors.gray.x200};
  }
`;
