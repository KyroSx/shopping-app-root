import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 8;
  background-color: #fff;
  opacity: 0.9;
  filter: blur();
`;

export const StyledSpinner = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 40px;
  margin: -20px 0 0 -25px;
  font-size: 10px;
  text-align: center;
  animation: rotate 2s linear infinite;

  & .path {
    animation: dash 1.5s ease-in-out infinite;
    stroke: ${props => props.theme.colors.brand};
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 40px;
  font-weight: bold;
`;
