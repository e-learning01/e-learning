import React from 'react';
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Login from "./components/Login.jsx"
import SignUp from "./components/signUp.jsx"
import Cart from "./components/Cart.jsx"
import AllCourses from "./components/AllCourses.jsx"
import { BrowserRouter, Routes } from 'react-router-dom/dist/index.js';
import { Link, Route } from 'react-router-dom';
import "./style.css"
import TeachOnWhatever from './components/TeachOnWhatever.jsx';
import ContactUs from "./components/ContactUs.jsx"
import MyCourses from './components/MyCourses.jsx';
import GameOn from './components/GameOn.jsx';



function App() {







  return (
    <div>
   <BrowserRouter>
  
  <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/about" element={<About/>}></Route>
    <Route exact path="/AllCourses" element={<AllCourses/>}></Route>
    <Route exact path="/login" element={<Login/>}></Route>
    <Route exact path="/SignUp" element={<SignUp/>}></Route>
    <Route exact path="/TeachOnWhatever" element={<TeachOnWhatever/>}></Route>
    <Route exact path="/ContactUs" element={<ContactUs/>}></Route>
    <Route exact path="/Cart" element={<Cart/>}></Route>
    <Route exact path="/MyCourses" element={<MyCourses/>}></Route>
    <Route exact path="/gameOn" element={<GameOn />}></Route>
  </Routes>
  <footer>
  <div className='fo'>
    <ul>
      <li><Link to="/ContactUs">Contact Us</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
  <p>&copy; 2023 Your Company. All rights reserved.</p>
</footer>

</BrowserRouter>


    
    
   </div>
  )    
}

export default App;
