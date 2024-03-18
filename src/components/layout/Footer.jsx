import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-fuchsia-600 text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 d-flex flex-column justify-content-between">
            <div>
              <Link to="/about">AboutUs</Link>
              <p>Our shop provides high-quality utility products </p>
              <p> Easily return with in 7 days of use </p> 

            </div>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-between">
            <div>
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>Phone: +977 9823524880</li>
                <li>Email: Anil Kumar Mahato</li>
                <li>Address: Imadole, Lalitpur</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-between">
            <div>
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-facebook"></i>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <i className="bi bi-twitter"></i>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <i className="bi bi-instagram"></i>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <p>DigitalMithalaMart &copy; 2024  || All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
