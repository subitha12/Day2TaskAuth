import React from "react";
import styled, { keyframes } from "styled-components";

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounceIn = keyframes`
  0% { transform: scale(0.9); opacity: 0; }
  50% { transform: scale(1.05); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`;

const fadeInDelay = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  padding: 50px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: background 0.3s ease, color 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  animation: ${bounceIn} 1s ease-out;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  animation: ${fadeInDelay} 1s ease-out 0.3s both;
`;

function Home() {
  return (
    <Container>
      <Title>A Beautiful, Secure Authentication Experience</Title>
      <Subtitle>Seamless user experience with thoughtful animations and transitions.</Subtitle>
    </Container>
  );
}

export default Home;
