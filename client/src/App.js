import React, { useState, useEffect } from "react";
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import UserInfo from "./components/UserInfo";
import axios from "axios";

const App = () => {
  const [currentForm, setCurrentForm] = useState('login');
  const [users, setUsers] = useState([]);
  console.log(users)

  const toggleForm = (formName) => {
    setCurrentForm(formName);
    
    useEffect(() => {
      getData()
    }, [])
    const getData = () => {
      axios.get('/users').
      then((result) => {
        setUsers(result.data)
      })
    }

  }
  return (
    <div className="App">
      {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
      <UserInfo getData = {getData} users={users} />
    </div>
  )
};

export default App;
