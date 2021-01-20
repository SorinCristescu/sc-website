import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;

export const Intro = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: -40px;
  left: -80px;

  svg {
    margin-right: 10px;
  }

  p {
    margin-bottom: 50px;
  }
`;
