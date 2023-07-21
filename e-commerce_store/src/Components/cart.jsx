import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Cart() {
  return (
    <div>
      <Navbar></Navbar>

      <h2
        style={{
          color: "#100f3d",
          fontWeight: "bold",
          fontFamily: "bahnschrift",
          textAlign: "center",
          marginTop: "20px",
          fontSize: "35px",
        }}
      >
        Your Add to Cart
      </h2>

      <div className="cart">
        <div className="cart-product">
          <div>
            <img
              src="/images/pro2.png"
              alt="Generic placeholder image"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div>
            <div>
              <p style={{ fontSize: "small" }}>Name</p>
              <p className="cart-values">Iphone</p>
            </div>
          </div>
          <div>
            <div>
              <p style={{ fontSize: "small" }}>Color</p>
              <p className="cart-values">
                <i style={{ color: "red" }}>Red</i>
              </p>
            </div>
          </div>
          <div>
            <div>
              <p style={{ fontSize: "small" }}>Quantity</p>
              <p className="cart-values">1</p>
            </div>
          </div>
          <div>
            <div>
              <p style={{ fontSize: "small" }}>Price</p>
              <p className="cart-values">350,999 Rs</p>
            </div>
          </div>
          <div>
            <div>
              <p style={{ fontSize: "small" }}>Total</p>
              <p className="cart-values">350,999 Rs</p>
            </div>
          </div>
        </div>

        <div className="orderPrice">
          <p>
            <span style={{ fontSize: "small", marginRight: "5px" }}>
              Order total:
            </span>
            <span className="cart-values">350,999 Rs</span>
          </p>
        </div>

        <div className="cart-btn">
          <button className="btn1" type="button">
            Continue shopping
          </button>
          <button
            className="btn2"
            type="button"
            style={{ backgroundColor: "#f57224", color: "white" }}
          >
            Add to cart
          </button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
