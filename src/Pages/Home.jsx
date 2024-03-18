import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Footer from "../components/layout/Footer";
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';
import "../components/CSS/Home.css"

 export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              showArrows={true}
              className="carousel" 
            >
              <div>
                <img src={img1} alt="First slide" />
                <p className="legend">First</p>
              </div>
              <div>
                <img src={img2} alt="Second slide" />
                <p className="legend">Second</p>
              </div>
              <div>
                <img src={img3} alt="Third slide" />
                <p className="legend">Third</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;


