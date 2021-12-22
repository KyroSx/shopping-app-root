import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.gray.x50};

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${props => props.theme.zIndex.x1000};

  opacity: 0.9;
  filter: blur();
`;

const OnCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const PositionCenter = styled.div`
  ${OnCenter};
`;

export const Text = styled.p`
  ${OnCenter};
  top: 55%;
`;
