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
            <Link>Cart</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="navbtn">
        <button>Register</button>
        <button>Login</button>
      </div>
    </nav>
  );
}
