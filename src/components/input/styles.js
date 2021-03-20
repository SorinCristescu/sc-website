import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 30px 0 0 0;
  position: relative;

  input {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    background-color: transparent;
    letter-spacing: 1px;
    border: 1px solid ${(props) => props.theme.colors.border};
    padding: 7px 14px;
    color: #FFFFFF
    // transition: 0.4s;
  //   :focus {
  //     outline: none;
  //   }
  //   :focus ~ .focus-border:before,
  //   :focus ~ .focus-border:after,
  //   .has-content ~ .focus-border:before,
  //   .has-content ~ .focus-border:after {
  //     width: 100%;
  //     transition: 0.2s;
  //     transition-delay: 0.6s;
  //   }
  //   :focus ~ .focus-border:after,
  //   .has-content ~ .focus-border:after {
  //     transition-delay: 0.2s;
  //   }
  //   :focus ~ .focus-border i:before,
  //   :focus ~ .focus-border i:after,
  //   .has-content ~ .focus-border i:before,
  //   .has-content ~ .focus-border i:after {
  //     height: 100%;
  //     transition: 0.2s;
  //   }
  //   :focus ~ .focus-border i:after,
  //   .has-content ~ .focus-border i:after {
  //     transition-delay: 0.4s;
  //   }
  //   :focus ~ label,
  //   .has-content ~ label {
  //     top: -18px;
  //     left: 0;
  //     font-size: 12px;
  //     color: #ffffff;
  //     transition: 0.3s;
  //   }
  // }
  // .focus-border:before,
  // .focus-border:after {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   width: 0;
  //   height: 2px;
  //   background-color: #ffffff;
  //   transition: 0.2s;
  //   transition-delay: 0.2s;
  // }
  // .focus-border:after {
  //   top: auto;
  //   bottom: 0;
  //   right: auto;
  //   left: 0;
  //   transition-delay: 0.6s;
  // }
  // .focus-border i:before,
  // .focus-border i:after {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 2px;
  //   height: 0;
  //   background-color: #ffffff;
  //   transition: 0.2s;
  // }
  // .focus-border i:after {
  //   left: auto;
  //   right: 0;
  //   top: auto;
  //   bottom: 0;
  //   transition-delay: 0.4s;
  // }

  // label {
  //   position: absolute;
  //   left: 14px;
  //   width: 100%;
  //   top: 10px;
  //   color: ${(props) => props.theme.colors.border};
  //   transition: 0.3s;
  //   z-index: -1;
  //   letter-spacing: 0.5px;
  // }
`;

export const ErrorText = styled.small`
  color: ${(props) => props.theme.colors.danger};
  width: 100%;
  text-align: left;
`;
