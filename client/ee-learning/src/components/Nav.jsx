import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import CartContext from '../Context/Cart/CartContext';




function Nav() {
  const{cartItems,showHideCart}=useContext(CartContext)
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
        <li onClick={showHideCart} className="cartt"><img src="https://cdn-icons-png.flaticon.com/512/60/60992.png" width="20" height="20"/>
        {cartItems.length>0 && <div className='item_count'><span>{cartItems.length}</span></div>} {console.log("ooooooooo",cartItems)}</li>
      </ul>
    </div>
  </nav>
   
  )
}

export default Nav