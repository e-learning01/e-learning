import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        try {
            const response = await axios.post('/signin', { email, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            console.log(response.data);
          } catch (error) {
            console.error(error.response.data);
          }
    };
    return (
        <div className="auth-form-container">
            <h2>Hello Again!</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">E-Mail:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="eg: Youremail@gmail.com" id="email"/>
                <label htmlFor="password">Password:</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password"/>
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account yet? You can register here!</button>
        </div>
    )
};

export default Login;