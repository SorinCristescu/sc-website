import styled, { keyframes } from 'styled-components';

const move = keyframes`
    0% {
        transform: translate(-25%, 0);
   }
    50% {
        text-shadow: 0 15px 40px rgba(11, 0, 38, 0.6);
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
    font-size: 130px;
    display: inline-block;
    color: #4802ff;
    animation: ${move} 2s ease-in-out infinite;
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
