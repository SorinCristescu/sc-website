import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1224px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.foreground};
`;

export const Main = styled.div`
  width: 100%;
  margin-left: 80px;
`;
