import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import ProductCards from "./productCards";

export default function Products() {
  return (
    <div>
      <Navbar />
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
        Our Recent Products
      </h2>

      <ProductCards />
      <Footer />
    </div>
  );
}
