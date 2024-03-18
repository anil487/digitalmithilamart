import React from "react";
import "../components/CSS/AboutUs.css"
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          Digital Mithila Mart is an E-commerce platform based in Nepal, State
          Madhesh. We are located in Bandipur Siraha and provide a wide range of
          high-quality products at affordable prices.
        </p>
        <p>
          Our platform offers a variety of products including electronics,
          clothes, shoes, watches, fancy items, and much more. We strive to
          deliver top-notch products to our customers with a seamless online
          shopping experience.
        </p>
        <p>
          We welcome you to visit Digital Mithila Mart for an exciting shopping
          experience. Feel free to contact us for any inquiries or assistance.
        </p>
        <div className="contact-info">
          <p>
            <strong>Phone:</strong> +977 9823524880
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:anilmahatoanil95659@gmail.com">
              anilmahatoanil95659@gmail.com
            </a>
          </p>
        </div>
        <p className="visit-request">
          We kindly request you to visit us at Bandipur Siraha, Madhesh, Nepal
          for an exclusive shopping experience.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
