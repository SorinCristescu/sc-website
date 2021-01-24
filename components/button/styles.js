import styled from 'styled-components';

export const Container = styled.button`
  width: auto;
  min-width: ${(props) => props.minWidth};
  height: auto;
  padding: 14px 26px;
  border: 1px solid ${(props) => props.theme.colors.foreground};
  background-color: transparent;
  color: ${(props) => props.theme.colors.foreground};
  font-family: 'Barlow Condensed', sans-serif;
  font-style: regular;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.89;
  text-transform: uppercase;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.foreground};
    color: ${(props) => props.theme.colors.background};
  }
`;
