import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f0d3d", color: "white" }}>
      <div>
        <div className="footerBox">
          <div className="footerInfo">
            <h2 style={{ marginTop: "40px", fontFamily: "bahnschrift" }}>
              E-Commerce Store
            </h2>
            <p style={{ fontFamily: "bahnschrift" }}>
              At Our Ecommerce Store, we are passionate about providing
              exceptional products and an unparalleled shopping experience. We
              strive to offer a curated selection of high-quality items that
              meet the diverse needs and tastes of our valued customers.
            </p>
          </div>

          <div className="footerLinks">
            <h2
              style={{
                marginTop: "40px",
                marginLeft: "30px",
                fontFamily: "bahnschrift",
              }}
            >
              Links
            </h2>

            <ul>
              <li>
                <Link
                  to="/"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Products"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/Cart"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/ContactUs"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="footerLinks">
            <h2 style={{ marginTop: "40px", marginLeft: "30px" }}>
              Social Media
            </h2>
            <ul>
              <li>
                <a
                  href="index.html"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        © 2020 Copyright:
        <a href="/" style={{ textDecoration: "none", color: "white" }}>
          ecommerce-store.com
        </a>
      </div>
    </footer>
  );
}
