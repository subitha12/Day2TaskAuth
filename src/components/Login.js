import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
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
  animation: fadeIn 1.2s ease-in-out;

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
  transition: all 0.3s ease-in-out;

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
  transition: all 0.3s ease-in-out;

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

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Min 6 characters").required("Required"),
    }),
    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((user) => user.email === values.email && user.password === values.password);

      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        setIsAuthenticated(true);
        navigate("/home");
      } else {
        alert("Invalid credentials!");
      }
    },
  });

  return (
    <Container>
      <FormWrapper>
        <Title>Login</Title>
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="email"
            name="email"
            onChange={formik.handleChange}
            placeholder="Email"
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <ErrorText>{formik.errors.email}</ErrorText> : null}

          <Input
            type="password"
            name="password"
            onChange={formik.handleChange}
            placeholder="Password"
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? <ErrorText>{formik.errors.password}</ErrorText> : null}

          <Button type="submit">Login</Button>
        </form>
      </FormWrapper>
    </Container>
  );
}

export default Login;
