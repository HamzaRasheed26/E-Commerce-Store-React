import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Signup() {
  return (
    <div>
      <Navbar></Navbar>

      <center>
        <div
          className="register-card"
          style={{
            padding: "50px",
            borderRadius: "1rem",
            width: "35%",
            border: "1px solid #D2D2D2",
            marginTop: "50px",
          }}
        >
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
            Register
          </h2>
          <p
            style={{
              color: "#100f3d",
              fontFamily: "bahnschrift",
            }}
          >
            Register Yourself!
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
            Have an Account?
            <Link
              to="/Login"
              style={{
                color: "#100f3d",
                textDecoration: "none",
              }}
            >
              Login
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
            Register
          </button>
        </div>
      </center>
    </div>
  );
}
