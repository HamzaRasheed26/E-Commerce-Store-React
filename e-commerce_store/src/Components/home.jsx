import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Navbar from "./navbar";
import Footer from "./footer";
import ProductCards from "./productCards";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <div>
      <Navbar />

      <MDBCarousel showControls>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="/images/image1.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="/images/image2.png"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="/images/image3.png"
          alt="..."
        />
      </MDBCarousel>

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
        Previous Products
      </h2>

      <ProductCards />

      <Footer />
    </div>
  );
}
