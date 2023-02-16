import React, { useState } from "react";
import axios from "axios"

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [conPass, setConPass] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [speciality, setSepciality] = useState('');
    const [img, setImg] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAdress] = useState('');
    const [age, setAge] = useState('');
    const [role, setRole] = useState('');
    //const [transitionState, setTransitionState] = useState(false)

    //let firstnameC;
    // let lastnameC;
    // let usernameC;
    // let emailC;
    // let specialityC; 
    // let passwordC;
    // let cPasswordC; 
    // let addressC;
    // let ageC;
    // let roleC;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/signup', { name, lastname, username, speciality, email, password, address, img, role });
            console.log(response.data);
          } catch (error) {
            console.error(error.response.data);
          }
    };
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
            <label htmlFor="name">First name:</label>
            <input value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="eg: Tyler" />
            <label htmlFor="lastname">Last name:</label>
            <input value={lastname} onChange={(e) => setLastName( e.target.value)} id="lastname" placeholder="eg: Hoover" />
            <label htmlFor="username">Username:</label>
            <input value={username} onChange={(e) => setUsername( e.target.value)} id="username" placeholder="eg: Hoovie91" />
            <label htmlFor="speciality">Speciality:</label>
            <input value={speciality} onChange={(e) => setSepciality( e.target.value)} id="speciality" placeholder="eg: physics, science" />
            <label htmlFor="email">E-Mail:</label>
            <input value={email} onChange={(e) => setEmail( e.target.value)}type="email" placeholder="eg: Youremail@gmail.com" id="email"/>
            <label htmlFor="password">Password:</label>
            <input value={password} onChange={(e) => setPass( e.target.value)} type="password" placeholder="Between 8 - 20 use caps and nums" id="password"/>
            <label htmlFor="password">Confirm password:</label>
            <input value={conPass} onChange={(e) => setConPass( e.target.value)} type="password" placeholder="Confirm your password" id="password"/>
            <label htmlFor="address">Address:</label>
            <input value={address} onChange={(e) => setAdress(e.target.value)} type="text" placeholder="eg:  Wichita Kansas, 1234NW Salt Lake" id="address"/>
            <label htmlFor="age">Age:</label>
            <input value={age} onChange={(e) => setAge( e.target.value)} type="number" min="15" max="65" placeholder="Between 15 - 65 " id="age"/>
            <label htmlFor="role">Choose a role:</label>
            <select value={role} onChange={(e) => setRole( e.target.value)} id="roles" >
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            </select>
            <label htmlFor="img">Profile picture:</label>
            <input value={img} onChange={(e) => setImg( e.target.value)}type="file" id="img"></input>
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here!</button>
    </div>
    </div>
    )
};

export default Register;
