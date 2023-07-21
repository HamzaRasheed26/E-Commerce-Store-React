import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Navbar() {
  return (
    <nav
      style={{ backgroundColor: "#100f3d", color: "white", padding: "10px" }}
    >
      <div className="navtitle">
        <Link to="/">
          <img src="/images/cart.png" alt="" />
        </Link>

        <h5 style={{ marginTop: "6px" }}>E-Commerce Store</h5>
      </div>

      <div className="navlist">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="navbtn">
        <Link to="/SignUp">
          <button>Register</button>
        </Link>
        <Link to="/Login">
          <button>Login</button>
        </Link>
      </div>
    </nav>
  );
}
