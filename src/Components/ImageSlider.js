import React from "react";
import { Carousel } from "react-bootstrap";
import './ImageSlider.css'
function ImageSlider() {
  return (
    <div className="d-none d-md-block">
      <Carousel interval={3000} controls={true} fade={true} pauseOnHover={true}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={require("../Images/off1.jpg")}
            alt="one credit course"
          />
        </Carousel.Item>
    
        {/* <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={require("../Images/off3.jpg")}
            alt="Internship In 5G"
          />
        </Carousel.Item> */}
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={require("../Images/off4.jpg")}
            alt="Internship In 5G"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageSlider;
