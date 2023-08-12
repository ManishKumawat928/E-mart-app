import React, { useState } from "react";
import axios from "axios";
import {NavLink, useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/register", { name, email, password })
      .then(res => {
        navigate('/login')
      })
      .catch((err) => console.log(err,"Error aa gya😂"));
  };
  return (
    <form
      className="signup-form"
      style={{ margin: "150px auto" }}
      onSubmit={handleSubmit}
    >
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Create Password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
      <p style={{"textAlign":"center"}} className="my-1">Already have an account <NavLink to="/login">login</NavLink> </p>
    </form>
  );
};

export default SignUpForm;
