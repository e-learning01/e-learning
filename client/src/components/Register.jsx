import React, { useState } from "react";
import axios from "axios"
import { v2 as cloudinary } from 'cloudinary';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [conPass, setConPass] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [speciality, setSepciality] = useState('');
    const [img, setImg] = useState(null);
    const [username, setUsername] = useState('');
    const [address, setAdress] = useState('');
    const [age, setAge] = useState('');
    const [role, setRole] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
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

        if (password !== conPass) {
            setErrorMessage('Passwords do not match.');
            return;
          }

        const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRules.test(password)) {
          setErrorMessage('Please enter a password with at least 8 characters, a capital letter, and a number.');
          return;
        }

        try {
            const checkUsername = await axios.get(`/users/${username}`);
            if (checkUsername.data.usernameExists) {
            setErrorMessage('This username is already in use. Please use a different username.');
            return;
           }
        //    if (img) {
        //     const result = await cloudinary.uploader.upload(img, {
        //       upload_preset: 'your_upload_preset',
        //     })}
            const response = await axios.post('/signup', { name, lastname, username, speciality, email, password, address, img, role });
            console.log(response.data);
          } catch (error) {
            console.error(error.response.data);
            if (error.response.status === 409) {
                setErrorMessage('This email is already in use. Please use a different email.');
              } else {
                setErrorMessage('An error occurred. Please try again later.');
              }
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
            {errorMessage && <p>{errorMessage}</p>}
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here!</button>
    </div>
    </div>
    )
};

export default Register;
