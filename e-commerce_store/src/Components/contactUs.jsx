import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function ContactUs() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="contactCard">
        <div className="contactCard-header">
          <h5>Contact Us</h5>
        </div>
        <div className="contactCard-Body">
          <form action="">
            <label htmlFor="">Name</label> <br />
            <input type="text" placeholder="Enter your name" required /> <br />
            <label htmlFor="">Email</label> <br />
            <input type="email" placeholder="Enter your email" required />{" "}
            <br />
            <label htmlFor="">Message</label> <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Enter your message"
            ></textarea>{" "}
            <br />
            <button type="submit" class="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
