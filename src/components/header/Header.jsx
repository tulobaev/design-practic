import React from "react";
import "./header.css";
import Buttonclick from "../../button";

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
        <Buttonclick label="Try for free" />
      </div>
    </div>
  );
};

export default Header;
