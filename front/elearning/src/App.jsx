import React from "react";
import Home from "./Home.jsx";
import About from "./about/About.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Cart from "./Cart.jsx";
import AllCourses from "./AllCourses.jsx";
import { BrowserRouter, Routes } from "react-router-dom/dist/index.js";
import { Link, Route } from "react-router-dom";
import "./components/Auth/auth.css";
import TeachOnWhatever from "./TeachOnWhatever.jsx";
import ContactUs from "./ContactUs.jsx";
import MyCourses from "./MyCourses.jsx";
import StudentProfile from "./StudentProfile.jsx";
import TeacherProfile from "./TeacherProfile.jsx";
import AddCourse from "./AddCourse.jsx";
import Allcourses from "./AllCourses.jsx";
import CourseDetail from "./CourseDetail.jsx";
import GameOn from "./GameOn.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/AllCourses" element={<Allcourses />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Register />}></Route>
          <Route exact path="/TeachOnWhatever" element={<Register />}></Route>
          <Route exact path="/Cart" element={<Cart />}></Route>
          <Route exact path="/MyCourses" element={<MyCourses />}></Route>
          <Route exact path="/coursedetail" element={<CourseDetail />}></Route>
          <Route
            exact
            path="/teacherprofile"
            element={<TeacherProfile />}
          ></Route>
          <Route
            exact
            path="/studentprofile"
            element={<StudentProfile />}
          ></Route>
          <Route exact path="/addcourse" element={<AddCourse />}></Route>
          <Route exact path="/gameOn" element={<GameOn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
