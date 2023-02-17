import React from "react";
import ReactDOM from "react-dom/client";
import TeacherProfile from "./TeacherProfile";
//import App from "./App";
import StudentProfile from "./StudentProfile";
import AddCourse from "./AddCourse";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./sidebar";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SideBar />
    <BrowserRouter>
      <Routes>
        <Route path="/teacherProfile" element={<TeacherProfile />}></Route>
        <Route path="/studentprofile" element={<StudentProfile />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
