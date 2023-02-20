import React, { useRef, useState } from "react";
import axios from "axios";
import "./auth.css";
import { redirect } from "react-router-dom";
const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [conPass, setConPass] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [speciality, setSepciality] = useState("");
  const [img, setImg] = useState(
    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  );
  const [username, setUsername] = useState("");
  const [address, setAdress] = useState("");
  const [age, setAge] = useState(0);
  const [role, setRole] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const ref = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    ref.current.selectedIndex && setRole(ref.current.selectedIndex);
    axios
      .post("http://127.0.0.1:5173/api/users/signup", {
        name,
        lastname,
        username,
        email,
        password,
        address,
        img,
        age,
        role,
        speciality,
      })
      .then((msg) => alert(msg.data))
      .catch((err) => console.log(err));
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
        <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">First name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="eg: Tyler"
          />
          <label htmlFor="lastname">Last name:</label>
          <input
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            id="lastname"
            placeholder="eg: Hoover"
          />
          <label htmlFor="username">Username:</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            placeholder="eg: Hoovie91"
          />
          <label htmlFor="email">E-Mail:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="eg: Youremail@gmail.com"
            id="email"
          />
          <label htmlFor="password">Password:</label>
          <input
            value={password}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Between 8 - 20 use caps and nums"
            id="password"
          />
          <label htmlFor="password">Confirm password:</label>
          <input
            value={conPass}
            onChange={(e) => setConPass(e.target.value)}
            type="password"
            placeholder="Confirm your password"
            id="password"
          />
          <label htmlFor="address">Address:</label>
          <input
            value={address}
            onChange={(e) => setAdress(e.target.value)}
            type="text"
            placeholder="eg:  Wichita Kansas, 1234NW Salt Lake"
            id="address"
          />
          <label htmlFor="age">Age:</label>
          <input
            onChange={(e) => setAge(e.target.value)}
            placeholder="Between 15 - 65 "
            id="age"
          />
          <label htmlFor="role">Choose a role:</label>
          <select
            ref={ref}
            value={role}
            onChange={(e) => setRole(e.target.value)}
            id="roles"
          >
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
          {ref.current?.selectedIndex && (
            <>
              <label htmlFor="speciality">Speciality:</label>
              <input
                value={speciality}
                onChange={(e) => setSepciality(e.target.value)}
                id="speciality"
                placeholder="eg: physics, science"
              />
            </>
          )}
          <button type="submit">Register</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
        <button className="link-btn" onClick={() => redirect("/login")}>
          Already have an account? Login here!
        </button>
      </div>
    </div>
  );
};

export default Register;
