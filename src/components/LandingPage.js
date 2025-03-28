import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #0d1117, #161b22);
  font-family: "Poppins", sans-serif;
  color: white;
  padding: 20px;
`;

const GlassEffect = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  padding: 60px 50px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
  text-align: center;
  max-width: 550px;
  width: 100%;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    padding: 40px 30px;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  background: linear-gradient(45deg, #ff8c00, #ffcd4b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #d1d5db;
  margin-top: 10px;
  line-height: 1.6;
`;

const HighlightedWord = styled.span`
  color: #ffcd4b;
  font-weight: bold;
`;

const Quote = styled.p`
  font-size: 1rem;
  font-style: italic;
  color: #8ab4f8;
  margin-top: 15px;
  opacity: 0;
  animation: fadeInQuote 1.5s ease-in-out forwards;

  &:nth-child(2) {
    animation-delay: 0.3s;
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
  }

  @keyframes fadeInQuote {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Button = styled.button`
  margin-top: 30px;
  padding: 15px 35px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #ff8c00, #ffcd4b);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
  font-family: "Poppins", sans-serif;

  &:hover {
    background: linear-gradient(135deg, #ffcd4b, #ff8c00);
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
  }
`;

const SignUpText = styled.p`
  font-size: 1rem;
  color: #b0b3b8;
  margin-top: 20px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffcd4b;
  }
`;

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <GlassEffect>
        <Title>Welcome to SimpliAuth</Title>
        <Subtitle>
          Experience a <HighlightedWord>Secure</HighlightedWord>,
          <br /> <strong>Elegant</strong> and <strong>Seamless</strong> authentication system.
        </Subtitle>
        <Quote>“Security is not a product, but a process.”</Quote>
        <Quote>“A seamless experience leads to trust.”</Quote>
        <Button onClick={() => navigate("/signup")}>Get Started</Button>
        <SignUpText onClick={() => navigate("/signup")}>
          Don't have an account? <strong>Sign up</strong>
        </SignUpText>
      </GlassEffect>
    </Container>
  );
}

export default LandingPage;
