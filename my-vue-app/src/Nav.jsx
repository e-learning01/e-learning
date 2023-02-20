import Cookies from "js-cookie";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./Auth";
import CartContext from "./Context/Cart/CartContext.js";

function Nav() {
  const isconnected = useAuth((state) => state.connected);
  const user = useAuth((state) => state.user);
  const connect = useAuth((state) => state.remove);
  const { cartItems, showHideCart } = useContext(CartContext);
  return (
    <nav style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "50px",
            alignSelf: "center",
            marginTop: "20px",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {!isconnected && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/Signup">Sign Up</Link>
              </li>
            </>
          )}
          <li className="dropdown">
            <a className="dropbtn">Courses</a>
            <div className="dropdown-content">
              <Link to="/AllCourses">All courses</Link>
              {isconnected && <Link to="/MyCourses">My courses</Link>}
            </div>
          </li>

          {isconnected && (
            <>
              {user.role == 0 ? (
                <li>
                  <Link to="/studentprofile">Profile</Link>
                </li>
              ) : (
                <li>
                  <Link to="/teacherprofile">Profile</Link>
                </li>
              )}
              <li
                onClick={(e) => {
                  connect();
                  Cookies.remove("AcessToken");
                }}
              >
                sign out
              </li>
            </>
          )}
          {!isconnected && (
            <li>
              <Link to="/TeachOnWhatever">TeachOnWhateve</Link>
            </li>
          )}
          <li onClick={showHideCart} className="cartt">
            <img
              src="https://cdn-icons-png.flaticon.com/512/60/60992.png"
              width="20"
              height="20"
            />
            {cartItems.length > 0 && (
              <div className="item_count">
                <span>{cartItems.length}</span>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
