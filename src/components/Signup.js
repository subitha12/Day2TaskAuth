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

function Signup() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Minimum 3 characters").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
    }),
    onSubmit: (values) => {
      let users = JSON.parse(localStorage.getItem("users")) || [];

      if (users.some((user) => user.email === values.email)) {
        alert("Email already registered! Try logging in.");
        return;
      }

      users.push(values);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful! Please login.");
      navigate("/login");
    },
  });

  return (
    <Container>
      <FormWrapper>
        <Title>Signup</Title>
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? <ErrorText>{formik.errors.name}</ErrorText> : null}

          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <ErrorText>{formik.errors.email}</ErrorText> : null}

          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? <ErrorText>{formik.errors.password}</ErrorText> : null}

          <Button type="submit">Signup</Button>
        </form>
      </FormWrapper>
    </Container>
  );
}

export default Signup;
