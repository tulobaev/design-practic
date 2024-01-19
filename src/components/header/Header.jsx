import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <h1>LogoType</h1>
      </div>

      <div className="menu">
        <a href="">How it works</a>
        <a href="">Meals</a>
        <a href="">Testimonials</a>
        <a href="">Pricing</a>
        <button>Try for free</button>
      </div>
    </div>
  );
};

export default Header;
