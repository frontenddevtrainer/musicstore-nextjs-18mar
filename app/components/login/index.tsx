"use client";
import { useState } from "react";

const LoginForm = ({
  email = "",
  password = "",
}: {
  email: string;
  password: string;
}) => {
  //   const [emailValue, setEmailValue] = useState(email);
  //   const [passwordValue, setPasswordValue] = useState(password);

  const [formValue, setFormValue] = useState<{
    username: string;
    email: string;
    password: string;
    phoneno: string;
  }>({ username: "", password: "", email: "", phoneno: "" });

  const {
    email: emailValue,
    password: passwordValue,
    username: usernameValue,
    phoneno,
  } = formValue;

  const validateForm = (values: any) => {
    const errors: any = {};

    if (values["email"] === "") {
      errors["email"] = "This is required";
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    validateForm({ ...formValue, [name]: value });
  };

  console.log(formValue);

  const updateUserDetails = (e) => {
    e.preventDefault();
  };

  return (
    <form className="p-1" onSubmit={updateUserDetails}>
      <p className="p-4">
        <label htmlFor="name">Email</label>
        <input
          value={emailValue}
          type="text"
          name="email"
          onChange={handleOnChange}
        />
        {emailValue === "" && <span>This is required</span>}
      </p>
      <p className="p-4">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={passwordValue}
          onChange={handleOnChange}
        />
      </p>

      <p className="p-4">
        <label htmlFor="password">Username</label>
        <input
          type="password"
          name="username"
          value={usernameValue}
          onChange={handleOnChange}
        />
      </p>

      <p className="p-4">
        <label htmlFor="password">Username</label>
        <input
          type="password"
          name="phoneno"
          value={phoneno}
          onChange={handleOnChange}
        />
      </p>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
