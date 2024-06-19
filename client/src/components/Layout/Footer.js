import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    // <div className="footer">
    //   <h1 className="text-center">All Right Reserved &copy; Sachin Gupta</h1>
    //   <p className="text-center mt-3">
    //     <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
    //     <Link to="/policy">Privacy Policy</Link>
    //   </p>
    // </div>
    <>
    <footer className="bg-dark text-light">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h5>About Us</h5>
        <p>Welcome to [Rolex], your premier destination for quality timepieces. At [Rolex], we are passionate about watches and committed to providing our customers with a curated selection of the finest brands and styles.</p>
      </div>
      <div className="col-md-4">
        <h5>Contact Us</h5>
        <p>Email: Sachingupta3051@gmail.com</p>
        <p>Phone: 9579302268</p>
      </div>
      <div className="col-md-4">
        <h5>Follow Us</h5>
        <ul className="list-unstyled">
          <li><Link to="#"><FaFacebook />Facebook</Link></li>
          <li><Link to="#"><FaTwitterSquare/>Twitter</Link></li>
          <li><Link to="#"><FaInstagramSquare/>Instagram</Link></li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-md-12 text-center">
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

    </>
  );
};

export default Footer;
