import React, { useState } from "react";
import classes from "./Login.module.css";
import { Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const HandleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const HandlePassChange = (e) => {
    setPassword(e.target.value);
  };
  const loginEmail = "omar@gmail.com";
  const loginPassword = "password";
  function ValidateInput(params) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email && email.match(validRegex) && password) {
      if (email === loginEmail && password === loginPassword) {
        localStorage.setItem("user", email);
        message.success("Welcome " + email);
        navigate("/");
      } else {
        message.warning("Unsuccessful Login");
      }
    } else {
      message.warning("Invalid Inputs");
    }
  }
  return (
    <div className={classes.login}>
      <div className={classes.card}>
        <h1>Login</h1>
        <div className={classes.input}>
          <Input
            placeholder="Email"
            htmlType="email"
            value={email}
            onChange={HandleEmailChange}
          />
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={HandlePassChange}
          />
          <Button className={classes.button} onClick={ValidateInput}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
