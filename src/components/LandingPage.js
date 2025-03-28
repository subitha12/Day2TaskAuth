import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  padding: 20px;
  font-family: "Montserrat", sans-serif;
  color: white;
  position: relative;
`;

const GlassEffect = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0px 10px 30px rgba(255, 255, 255, 0.2);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 3px 4px 5px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #ff6b6b, #ffb84d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeIn 1.5s ease-in-out;

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
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #d1d5db;
  max-width: 700px;
  line-height: 1.7;
  padding: 0 20px;
  animation: slideIn 1.5s ease-in-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HighlightedWord = styled.span`
  color: #ffb84d;
  font-weight: bold;
  font-size: 1.6rem;
`;

const Quote = styled.p`
  font-size: 1.4rem;
  font-style: italic;
  color: #38bdf8;
  margin-top: 15px;
  font-weight: 500;
  opacity: 0;
  animation: fadeInQuote 2s ease-in-out forwards;

  &:nth-child(2) {
    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    animation-delay: 1s;
  }

  @keyframes fadeInQuote {
    from {
      opacity: 0;
      transform: translateY(10px);
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
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #ff6b6b, #ffb84d);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.2);
  position: relative;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;

  &:hover {
    background: linear-gradient(135deg, #ffb84d, #ff6b6b);
    transform: scale(1.05);
    box-shadow: 0px 10px 30px rgba(255, 255, 255, 0.3);
  }
`;

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/Signup");
  };

  return (
    <Container>
      <GlassEffect>
        <Title>Welcome to SimpliAuth</Title>
        <Subtitle>
          Experience a <HighlightedWord>Secure</HighlightedWord>,
          <br /> <strong>"Beautiful"</strong> and <strong>"Seamless"</strong> authentication system.
        </Subtitle>
        <Quote>“Security is not a product, but a process.”</Quote>
        <Quote>“A seamless experience leads to trust.”</Quote>
        <Button onClick={handleGetStarted}>Get Started</Button>
      </GlassEffect>
    </Container>
  );
}

export default LandingPage;
