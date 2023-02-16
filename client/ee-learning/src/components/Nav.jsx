import React from 'react'
import {Link} from 'react-router-dom';
function Nav() {
  return (
   
 <nav>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/SignUp">Sign Up</Link></li>
        <li className="dropdown">
          <a className="dropbtn">Courses</a>
          <div className="dropdown-content">
            <Link to="/AllCourses">All courses</Link>
            <Link to="/MyCourses">My courses</Link>
          </div>
        </li>
        <li><Link to="/TeachOnWhatever">TeachOnWhateve</Link></li>
        <li><Link to="/Cart"><img src="https://cdn-icons-png.flaticon.com/512/60/60992.png" width="20" height="20"/></Link><span>0</span></li>
      </ul>
    </div>
  </nav>
   
  )
}

export default Nav