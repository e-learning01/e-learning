import React, { useState } from "react";
import axios from "axios";
import "./auth.css";
import { redirect } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
const Login = (props) => {
                                                                                                                                                                               const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://127.0.0.1:5173/api/users/signin', {
      email: email,
      password: password
    }, {
      withCredentials: true
    }).then(e=>{ 
      typeof e.data == "string"
    ? Swal.fire({
        icon: "error",
        title: "Oops...",
        text: e.data,
      })
    : Cookies.set('AcessToken', e.data.token)})
    .catch(error => {
      console.log(error);
    });
  }
  return (
    <div className="auth-form-container">
      <h2>Hello Again!</h2>
      <form cla0ssName="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-Mail:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="eg: Youremail@gmail.com"
          id="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Enter your password"
          id="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => redirect("/register")}>
        Don't have an account yet? You can register here!
      </button>
    </div>
  );
};

export default Login;
