import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <h2>About Jarurat Care</h2>
      <div className="about-content">
        <p>
          Jarurat Care is a state-of-the-art patient management system designed
          to streamline healthcare operations and improve patient care quality.
        </p>
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            To provide healthcare professionals with efficient tools for
            managing patient records while ensuring the highest standards of
            data security and accessibility.
          </p>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: info@jaruratcare.com</p>
          <p>Phone: +91 123-456-7890</p>
          <p>Address: Healthcare Tech Park, Bangalore - 560001</p>
        </div>
      </div>
    </div>
  );
};

export default About;
