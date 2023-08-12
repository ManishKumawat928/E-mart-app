import React, { useState } from "react";
import axios from "axios";
import {NavLink, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login", { email, password })
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <form
      className="signup-form"
      style={{ margin: "150px auto" }}
      onSubmit={handleSubmit}
    >
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
      <p style={{"textAlign":"center"}} className="my-1">Create a new account <NavLink to="/register">Register</NavLink> </p>

    </form>
  );
};

export default LoginForm;
