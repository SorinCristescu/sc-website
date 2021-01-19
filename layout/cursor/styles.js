import styled from 'styled-components';

export const CursorContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff;
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%) ${(props) => props.scale};
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  left: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
  transition: all 150ms ease;
  transition-property: opacity, background-color, transform, mix-blend-mode;
  opacity: ${(props) => props.opacity};
  background-color: ${(props) => props.background};
`;

export const Pointer = styled.div`
  width: 2px;
  height: 2px;
  align-self: auto;
  border: 1px solid #ffffff;
  border-radius: 100%;
  /* position: fixed; */
  transform: ${(props) => props.scale};
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: all 150ms ease;
  transition-property: opacity, background-color, transform, mix-blend-mode;
  opacity: ${(props) => props.opacity};
  background-color: #ffffff;
`;
