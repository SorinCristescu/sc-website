import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, 10px);
  }
`;

export const SVG = styled.svg`
  position: fixed;
  right: 100px;
  bottom: 10vh;
  animation: ${slide} 1.5s ease-in-out infinite;
`;
