import React, { useState } from "react";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <h2>Hello Again!</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">E-Mail:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="eg: Youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password:</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account yet? You can register here!</button>
        </div>
    )
};

export default Login;