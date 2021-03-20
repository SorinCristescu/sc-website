import React, { useState } from "react";
import Head from "next/head";
import { Formik, Field } from "formik";
import * as yup from "yup";
import styled from "styled-components";

// Components
import Link from "next/link";
import Button from "../components/button";
import Input from "../components/input";

const Form = styled.form`
  width: 300px;
  height: auto;
  margin: 0 auto;

  .form-group {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }
`;

const validationSchema = yup.object({
  name: yup.string().required().max(15),
  email: yup.string().required().max(15),
  password: yup.string().required().max(15),
  confirmedPassword: yup.string().required().max(15),
});

const Login = (props) => {
  const initialState = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    setUserData(initialState);
  };
  return (
    <div>
      <Head>
        <title>Login | Sorin Cristescu Studio Production</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          width: "100%",
          height: "calc(100vh - 80px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h5>Login</h5>
        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting, resetForm }) => {
            setSubmitting = true;
            // make async call here
            console.log(data);
            setSubmitting = false;
            resetForm();
          }}
        >
          {({
            values,
            isSubmitting,
            handleBlur,
            handleChange,
            handleSubmit,
            dirty,
            errors,
            touched,
          }) => (
            <Form onSubmit={handleSubmit}>
              <div className="form-group">
                <Input
                  label="Email"
                  type="email"
                  id="email"
                  name="name"
                  value={values.email}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.email}
                  errorText={errors.email && touched.email ? errors.email : ""}
                />
                <Input
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.password}
                  errorText={
                    errors.password && touched.password ? errors.password : ""
                  }
                />
              </div>
              <Button
                disabled={isSubmitting}
                type="submit"
                name="Login"
                minWidth="100%"
                // onClick={handleSubmit}
              />
              <small>
                Already have an account?
                <Link href="/register">
                  <a>Register now</a>
                </Link>
              </small>
              {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
};

export default Login;
