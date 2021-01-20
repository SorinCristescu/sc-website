import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: ${(props) => (props.openMenu ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px 45%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #4802ff;
  z-index: 10000;
  overflow: hidden;

  a {
    margin: 10px 0;
  }

  svg {
    /* position: absolute;
    top: 50px;
    right: 100px; */
  }
`;
