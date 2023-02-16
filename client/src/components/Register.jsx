import React, { useState } from "react";

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [conPass, setConPass] = useState('');
    const [name, setName] = useState('');
    const [pic, setPic] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAdress] = useState('');
    const [age, setAge] = useState('');
    //const [transitionState, setTransitionState] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="parent">
        <div className="neighboring-banner">
        <ul>
        <li className="lName">Brainlab</li>
        <li className="headline">Keep Learning.</li>
        <li className="subline">Your best bet for e-learning</li>
        <h5 className="footer">RBK™</h5>
        </ul>
        </div>
        <div className="auth-form-container">
        <h2>CREATE A NEW ACCOUNT</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name:</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="eg: Tyler Hoover" />
            <label htmlFor="username">Username:</label>
            <input value={username} username="username" onChange={(e) => setUsername(e.target.value)} id="username" placeholder="eg: Hoovie91" />
            <label htmlFor="email">E-Mail:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="eg: Youremail@gmail.com" id="email"/>
            <label htmlFor="password">Password:</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Between 8 - 20 use caps and nums" id="password"/>
            <label htmlFor="password">Confirm password:</label>
            <input value={conPass} onChange={(e) => setConPass(e.target.value)} type="password" placeholder="Confirm your password" id="password"/>
            <label htmlFor="address">Address:</label>
            <input value={address} onChange={(e) => setAdress(e.target.value)} type="text" placeholder="eg:  Wichita Kansas, 1234NW Salt Lake" id="address"/>
            <label htmlFor="age">Age:</label>
            <input value={age} onChange={(e) => setAge(e.target.value)} type="number" min="15" max="65" placeholder="Between 15 - 65 " id="age"/>
            <label htmlFor="roles">Choose a role:</label>
            <select name="roles" id="roles">
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            </select>
            <label htmlFor="image">Profile picture:</label>
            <input value={pic} onChange={(e) => setPic(e.target.value)}type="file" id="img"></input>
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here!</button>
    </div>
    </div>
    )
};

export default Register;
