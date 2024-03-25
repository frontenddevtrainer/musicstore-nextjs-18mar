"use client";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./design.module.css";
import Header from "../header";

import Card from "../card";

const formValidateSchema = Yup.object().shape({
  password: Yup.string().required("Password is a required field"),
  contact: Yup.object().shape({
    email: Yup.string()
      .email("Email pattern is not matching")
      .required("You didn't fill the email"),
    phoneno: Yup.string().required(),
  }),
});

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
    <Card primary={true}>
      <Formik
        initialValues={{ contact: { email: "", phoneno: "" }, password }}
        onSubmit={onSubmit}
        validationSchema={formValidateSchema}
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

          console.log(touched);

          return (
            <>
              <form
                className={`p-1 m-1 ${styles.loginForm} ${styles.colorBlue}`}
                onSubmit={handleSubmit}
              >
                <p className="p-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="contact.email"
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors?.contact?.email && touched.contact?.email && (
                    <span>{errors?.contact?.email}</span>
                  )}
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
                  {errors?.password && touched.password && (
                    <span>{errors?.password}</span>
                  )}
                </p>

                <p className="p-4">
                  <label htmlFor="password">Username</label>
                  <input
                    type="password"
                    name="username"
                    onChange={handleChange}
                  />
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
                  {errors?.contact?.phoneno && touched.contact?.phoneno && (
                    <span>{errors?.contact?.phoneno}</span>
                  )}
                </p>
                <button type="submit">Login</button>
              </form>
            </>
          );
        }}
      </Formik>
    </Card>
  );
};

export default LoginForm;

{
  /*  */
}
