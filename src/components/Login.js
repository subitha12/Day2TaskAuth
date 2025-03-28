import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #ff8c00, #2c2c2c);
`;

const FormWrapper = styled.div`
  background: #1c1c1c;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  width: 350px;
  text-align: center;
`;

const Title = styled.h2`
  color: #ff8c00;
  font-size: 2rem;
  margin-bottom: 15px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ff8c00;
  border-radius: 5px;
  font-size: 1rem;
  background: #2c2c2c;
  color: white;

  &:focus {
    border-color: #ff8c00;
    outline: none;
    box-shadow: 0 0 8px rgba(255, 140, 0, 0.6);
    background: #3c3c3c;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  background: #ff8c00;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #e07b00;
    transform: scale(1.08);
    box-shadow: 0 4px 10px rgba(255, 140, 0, 0.3);
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: -5px;
`;

const SignupText = styled.p`
  margin-top: 15px;
  color: white;
  font-size: 0.9rem;

  a {
    color: #ff8c00;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Clear fields on logout
  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!isLoggedIn) {
      setEmail("");
      setPassword("");
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store user session
      setIsAuthenticated(true);
      setEmail(""); // Clear email field
      setPassword(""); // Clear password field
      navigate("/home"); // Navigate to Home page after successful login
    } else {
      setError("Invalid email or password. Try again.");
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Login</Title>
        <form onSubmit={handleLogin} autoComplete="off">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
          {error && <ErrorText>{error}</ErrorText>}
          <Button type="submit">Login</Button>
          <SignupText>
            Don't have an account? <a onClick={() => navigate("/signup")}>Create Account</a>
          </SignupText>
        </form>
      </FormWrapper>
    </Container>
  );
}

export default Login;
