import React from "react";
import { Link } from "react-router-dom";
import "../CSS/footer.css";
import khalti from "../../Assets/khalti.png";
import fone from "../../Assets/fone.png";
import esewa from "../../Assets/esewa.png";
import connectips from "../../Assets/connectips.jpg";

const Footer = () => {
  return (
    <footer className="footer bg-fuchsia-600 ">
      <div className="footer-container">
        <div className="footer-section">
          <h5 className="we-accept">
            <Link to="/about" className="footer-link">
              About Us
            </Link>
          </h5>
          <p className="about-paragraph">
            Digital Mithila Mart offers a variety of products including electronics, clothes, shoes, watches, fancy items, and much more.
          </p>
        </div>

        <div className="footer-section">
          <h5 className="we-accept">Contact Us</h5>
          <ul className="contact-list">
            <li>Phone: +977 9823524880</li>
            <li>Email:Digitalmithilamart@gmail.com</li>
            <li>Address:Bandipur,Siraha</li>
          </ul>
        </div>

        <div className="footer-section">
          <h5 className="we-accept">Stay Connected</h5>
          <ul className="social-links">
            <li>
              <i className="bi bi-facebook"> Facebook</i>
            </li>
            <li>
              <i className="bi bi-twitter"> Twitter</i>
            </li>
            <li>
              <i className="bi bi-instagram"> Instagram</i>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h5 className="we-accept">We Accept</h5>
          <div className="payment-logos">
            <img src={khalti} alt="Khalti Logo" />
            <img src={esewa} alt="Esewa Logo" />
            <img src={fone} alt="Fonepay Logo" />
            <img src={connectips} alt="ConnectIPS Logo" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Digital Mithila Mart &copy; 2024 || All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
