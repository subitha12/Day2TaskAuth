import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

// Themes for light and dark mode
const lightTheme = {
  background: "#ffffff",
  text: "#333",
  buttonBg: "#007bff",
  buttonText: "#fff",
  buttonAltBg: "#ddd",
  buttonAltText: "#333",
};

const darkTheme = {
  background: "#1a1a2e",
  text: "#ffffff",
  buttonBg: "#4e89ae",
  buttonText: "#fff",
  buttonAltBg: "#333",
  buttonAltText: "#ddd",
};

// Apply background and text color to full page
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: 'Arial', sans-serif;
    height: 100vh;
    width: 100vw;
    transition: all 0.3s ease-in-out;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: ${(props) => props.theme.background};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  background-color: ${(props) => (props.primary ? props.theme.buttonBg : props.theme.buttonAltBg)};
  color: ${(props) => (props.primary ? props.theme.buttonText : props.theme.buttonAltText)};
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

const ToggleSwitch = styled.button`
  background: none;
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};
  }
`;

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsAuthenticated(false);
    navigate("/");
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <NavbarContainer>
        <Logo>SimpliAuth</Logo>
        <NavLinks>
          {isAuthenticated ? (
            <>
              <span>Welcome, {JSON.parse(localStorage.getItem("loggedInUser"))?.name}</span>
              <Button primary onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Link to="/login"><Button primary>Login</Button></Link>
              <Link to="/signup"><Button>Signup</Button></Link>
            </>
          )}
          <ToggleSwitch onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </ToggleSwitch>
        </NavLinks>
      </NavbarContainer>
    </ThemeProvider>
  );
}

export default Navbar;
