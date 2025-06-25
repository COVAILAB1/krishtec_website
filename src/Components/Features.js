import React from "react";
import { Col } from "react-bootstrap";

function Features() {
  console.log("features");
  const lists = [
    {
      icon: require("../Images/features-icon-1.png"),
      heading: "Innovative IoT Solutions",
      text:
        "KRISHTEC excels in developing cutting-edge IoT solutions that address complex environmental challenges and enhance industrial automation. Our technology integrates seamlessly to provide real-time data and actionable insights.",
      button: "Learn More",
      animateDuration: "300ms",
      animateName: "fadeInLeft"
    },
    {
      icon: require("../Images/features-icon-2.png"),
      heading: "Advanced Machine Learning",
      text:
        "Harness the power of advanced machine learning with KRISHTEC. Our ML models are designed to optimize performance, predict trends, and drive intelligent decision-making in various applications.",
      button: "Explore More",
      animateDuration: "600ms",
      animateName: "fadeInUp"
    },
    {
      icon: require("../Images/features-icon-3.png"),
      heading: "Tailored Automation Systems",
      text:
        "From industrial to home automation, KRISHTEC provides customized solutions that streamline processes and improve efficiency. Our systems are designed to meet specific needs and adapt to evolving technologies.",
      button: "Discover More",
      animateDuration: "900ms",
      animateName: "fadeInRight"
    }
  ];

  return (
    <>
      {lists.map((list, idx) => (
        <Col
          md="4"
          key={idx}
          className={`text-center ${list.animateName} animated mt-5 wow`}
          data-wow-duration={list.animateDuration}
        >
          <img src={list.icon} alt="" className="mb-3" />
          <h4>{list.heading}</h4>
          <p>{list.text}</p>
          <a href="./about" className="knowMoreBtn btn text-white text-uppercase">
            {list.button}
          </a>
        </Col>
      ))}
    </>
  );
}

export default React.memo(Features);
