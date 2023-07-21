import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Login() {
  return (
    <div>
      <Navbar></Navbar>

      <center>
        <div className="register-card">
          <img
            src="/favicon.ico"
            alt="Logo"
            width="70"
            height="70"
            style={{ marginBottom: "10px", marginTop: "-20px" }}
          />
          <h2
            style={{
              color: "#100f3d",
              fontFamily: "bahnschrift",
              fontWeight: "bold",
            }}
          >
            Login
          </h2>
          <p
            style={{
              color: "#100f3d",
              fontFamily: "bahnschrift",
            }}
          >
            Welcome Back! Login to Your Account
          </p>

          <div className="res-inputs">
            <label for="typeEmailX">Email</label>
            <input type="email" id="typeEmailX" />
          </div>

          <div className="res-inputs">
            <label for="typePasswordX">Password</label>
            <input type="password" id="typePasswordX" />
          </div>

          <div className="res-inputs">
            <label for="typePasswordX">Confirm Password</label>
            <input type="password" id="typePasswordX" />
          </div>

          <p style={{ margin: "10px", fontSize: "small", color: "#100f3d" }}>
            Don't Have an Account?
            <Link
              to="/SignUp"
              style={{
                color: "#100f3d",
                textDecoration: "none",
              }}
            >
              Sign up
            </Link>
          </p>

          <button
            style={{
              backgroundColor: "#0f0d3d",
              color: "white",
              fontFamily: "bahnschrift",
              width: "100%",
              marginTop: "10px",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "20px",
            }}
            type="submit"
          >
            Login
          </button>
        </div>
      </center>
    </div>
  );
}
