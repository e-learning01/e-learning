import React, { useEffect, useState } from "react";
import axios from "axios";
import "./auth.css";
import { redirect, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import Nav from "./Nav.jsx";

import jwt_decode from "jwt-decode";
import { useAuth } from "./Auth";
const Login = (props) => {
  const isconnected = useAuth((state) => state.connected)
  const navigate = useNavigate()
  useEffect (()=> {
    if (isconnected) {return navigate("/") }}
,[])
  const connect = useAuth((state) => state.connect)
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const logg = useAuth((state)=>state.logg)

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://127.0.0.1:5173/api/users/signin",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((e) => {
      if( typeof e.data == "string") 
          { Swal.fire({
              icon: "error",
              title: "Oops...",
              text: e.data,
            })
          }
          else { 
            Cookies.set("AcessToken", e.data.token);
            const user = jwt_decode(e.data.token)
            connect(user);
            navigate("/")
           }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
    <Nav/>
    <div className="whole">
    <div className="auth-form-container">
      <h2>Hello Again!</h2>
      <form cla0ssName="login-form" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="email">E-Mail:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="eg: Youremail@gmail.com"
          id="email"
        />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Enter your password"
          id="password"
        />
</div>
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => navigate("/")}>
        Don't have an account yet? You can register here!
      </button>
    </div>
    </div>
    </>
  );
};

export default Login;
