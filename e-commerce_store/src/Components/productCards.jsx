import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProductCards() {
  // State to hold the product data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the FakeStore API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  const cardLineStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const cardStyle = {
    flexBasis: "calc(25% - 40px)",
    border: "1px solid #D2D2D2",
    borderRadius: "5px",
    padding: "20px",
    margin: "20px",
    fontFamily: "bahnschrift",
    width: "300px",
  };

  const imgStyle = {
    height: "200px",
    width: "200px",
  };

  const headingStyle = {
    color: "#100f3d",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "10px",
  };

  const starStyle = {
    textAlign: "center",
    marginTop: "-10px",
  };

  const priceStyle = {
    color: "#f57224",
    textAlign: "center",
    fontWeight: "bold",
  };

  const btnStyle = {
    color: "white",
    backgroundColor: "#f57224",
    borderRadius: "5px",
  };

  return (
    <div>
      <div className="cardLine" style={cardLineStyle}>
        {products.map((product) => (
          <div key={product.id} className="cardBox" style={cardStyle}>
            <center>
              <img style={imgStyle} src={product.image} alt={product.title} />
            </center>
            <h5 style={headingStyle}>{product.title}</h5>
            <div style={starStyle}>⭐⭐⭐⭐⭐</div>
            <h5 style={priceStyle}>{product.price} Rs</h5>
            <p style={{ textAlign: "justify" }}>{product.description}</p>
            <center>
              <button className="btn" style={btnStyle}>
                Buy Now
              </button>
            </center>
          </div>
        ))}
      </div>
    </div>
  );
}
