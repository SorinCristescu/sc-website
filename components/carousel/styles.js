import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px 0;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  p {
    font-size: 0.8rem;
  }
`;

export const Counter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  p {
    transform: rotate(-90deg);
    font-size: 0.9rem;
    padding: 0 3px;
  }
`;

export const Navigation = styled.div`
  margin: 30px 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;
