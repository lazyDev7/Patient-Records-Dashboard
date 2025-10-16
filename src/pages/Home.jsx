import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Jarurat Care</h1>
      <div className="home-content">
        <p>Your trusted partner in healthcare management</p>
        <div className="features">
          <div className="feature">
            <h3>Easy Patient Management</h3>
            <p>Efficiently manage patient records and information</p>
          </div>
          <div className="feature">
            <h3>Quick Access</h3>
            <p>Access patient information instantly</p>
          </div>
          <div className="feature">
            <h3>Secure Records</h3>
            <p>Keep patient data safe and organized</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
