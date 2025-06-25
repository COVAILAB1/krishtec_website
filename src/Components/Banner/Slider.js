import React from "react";
import { Carousel } from "react-bootstrap";
import Banner from "../Banner/Banner";
function Slider() {
  return (
    <>
      <Carousel
        className="py-2"
        interval={3000}
        controls={false}
        fade={true}
        pauseOnHover={false}
      >
        <Carousel.Item>
          <Banner
            heading={[
              "Innovative IoT Solutions",
              <br key="break" />
      ,
              <span key="span"></span>
            ]}
            text="KRISHTEC specializes in developing IoT systems for industrial and home automation. Our solutions help solve environmental challenges through remote monitoring and advanced technology."
          >
            <a
              href="./about"
              className="knowMoreBtn btn text-white text-uppercase mb-3 mt-3"
            >
              Learn More
            </a>
          </Banner>
        </Carousel.Item>
        <Carousel.Item>
          <Banner
            heading="Our Products and Services"
            text="We offer cutting-edge IoT products and services, including machine learning, WSN, M2M, ADAS, and LoRA solutions, tailored to industry needs."
          >
            <a
              href="./about"
              className="knowMoreBtn btn text-white text-uppercase mb-3 mt-3"
            >
              Discover Our Solutions
            </a>
          </Banner>
        </Carousel.Item>
        <Carousel.Item>
          <Banner
            heading="Contact Us for a Demo"
            text="Interested in learning more about our IoT solutions? Reach out to us for a personalized demo and explore how we can assist with your automation needs."
          >
            <a
              href="./contact"
              className="knowMoreBtn btn text-white text-uppercase mb-3 mt-3"
            >
              Get in Touch
            </a>
          </Banner>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default React.memo(Slider);
