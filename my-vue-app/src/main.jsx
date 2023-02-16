import React from "react";
import ReactDOM from "react-dom/client";
import TeacherProfile from "./TeacherProfile";
//import App from "./App";
import StudentProfile from "./StudentProfile";
import AddCourse from "./AddCourse";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TeacherProfile />}></Route>
        <Route path="/studentprofile" element={<StudentProfile />}></Route>
        <Route path="/addcourse" element={<AddCourse />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
