import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "./style.css";
import iotimg from '../Images/IOT.png';
import lora from '../Images/lora.png';
import adas from '../Images/adas.png';
import lidar from '../Images/lidar.png';
import emc from '../Images/emi.emc.png';
import obd from '../Images/obd.png';
import dm from "../Images/dm.png";
import fiveg from '../Images/5g.png';
import Footer from "../Components/Footer";
import ml from "../Images/ml.png";
import './InternshipPage.css';

// Initialize Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

// Sample images array
const images = [
  { id: 1, title: "Machine Learning", url: ml, altText: "Machine learning internship opportunity" },
  { id: 2, title: "LORA", url: lora, altText: "LORA training in digital marketing" },
  { id: 3, title: "IOT", url: iotimg, altText: "IOT one credit course for internships" },
  { id: 4, title: "Digital Marketing", url: dm, altText: "Internship in Digital Marketing" },
  { id: 5, title: "OBD", url: obd, altText: "OBD" },
  { id: 6, title: "EMI/EMC", url: emc, altText: "EMI/EMC training program for internships" },
  { id: 7, title: "Internship in 5G", url: fiveg, altText: "Internship in 5G" },
  { id: 8, title: "ADAS", url: adas, altText: "ADAS" },
  { id: 9, title: "LIDAR", url: lidar, altText: "LIDAR" },
];

function InternshipPageInternship() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Google Form URL - Replace with your actual Google Form URL
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSepHZtuzmGbU6nIEb9pq8xUS3-RZdOi_76L5le_XHISeRYn7A/viewform";

  const handleInternshipClick = (internshipTitle) => {
    // Open Google Form in a new tab
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <section id="contact" className="mt-20 h-screen flex flex-col items-center justify-center bg-cover bg-center" data-aos="fade-up">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        className="mySwiper"
        loop={true}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative reflection overflow-visible">
              <button 
                onClick={() => handleInternshipClick(image.title)}
                className="w-full h-full focus:outline-none"
              >
                <img
                  src={image.url}
                  alt={image.altText}
                  className="transform transition duration-500 ease-in-out w-full h-auto max-h-96 object-contain hover:scale-110"
                />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                <p className="text-sm">{image.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Footer />
    </section>
  );
}

const InternshipPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <InternshipPageInternship />;
};

export default InternshipPage;