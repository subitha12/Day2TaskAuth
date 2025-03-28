import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #222;
  color: white;
`;

export const Form = styled.form`
  background: #333;
  padding: 30px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background: #444;
  color: white;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #ff6600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background: #ff3300;
  }
`;
