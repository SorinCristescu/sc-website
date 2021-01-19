import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  svg {
    /* position: absolute;
    top: 0;
    left: 0; */
    margin-right: 10px;
  }
`;
