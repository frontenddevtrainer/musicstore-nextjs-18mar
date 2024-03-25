"use client";
import { useState } from "react";
import { Formik } from "formik";

const LoginForm = ({
  email = "",
  password = "",
}: {
  email: string;
  password: string;
}) => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ contact: { email: email, phoneno: "" }, password }}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => {
        const {
          contact: { email, phoneno },
          password,
        } = values;

        return (
          <form className="p-1" onSubmit={handleSubmit}>
            <p className="p-4">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="contact.email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </p>
            <p className="p-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </p>

            <p className="p-4">
              <label htmlFor="password">Username</label>
              <input type="password" name="username" onChange={handleChange} />
            </p>

            <p className="p-4">
              <label htmlFor="password">Phone no</label>
              <input
                value={phoneno}
                type="password"
                name="contact.phoneno"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </p>
            <button type="submit">Login</button>
          </form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;

{
  /*  */
}
