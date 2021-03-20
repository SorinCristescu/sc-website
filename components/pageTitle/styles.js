import styled, { keyframes } from "styled-components";

const move = keyframes`
    0% {
        transform: translate(-25%, 0);
   }
    50% {
        text-shadow: 0 15px 50px rgba(255, 255, 255, 0.7);
   }
    100% {
        transform: translate(33%, 0);
   }
`;

export const Container = styled.div`
  margin: 50px 0;
  color: #4802ff;
  font-size: 0;
  line-height: 1;

  h2 {
    // font-size: 160px;
    display: inline-block;
    color: #000000;
    animation: ${move} 6s ease-in-out infinite;
  }

  h2:nth-child(2) {
    animation-delay: 0.4s;
  }

  h2:nth-child(3) {
    animation-delay: 0.8s;
  }

  h2:nth-child(4) {
    animation-delay: 1.3s;
  }
  h2:nth-child(5) {
    animation-delay: 1.7s;
  }
`;
