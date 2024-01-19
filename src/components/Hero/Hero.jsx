import React from "react";
import "./Hero.css";
import image from "../../images/app-screen-1 1.png";
import image2 from "../../images/app-screen-1 2 (2).png";

const Hero = () => {
  return (
    <div className="container-section">
      <div>
        <p className="HOW">HOW IT WORKS</p>
        <h1 className="Your">Your daily dose of health in 3 simple steps</h1>
      </div>
      <div className="display-center-div">
        <div>
          <span className="span01">01</span>
          <h3 className="Tell-h3">Tell us what you like (and what not)</h3>
          <p className="The-p">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
        </div>
        <div className="fon-bacraunt">
          <div className="fon-bacraunt-1">
            <img className="img-center" src={image} alt="" />
          </div>
        </div>
      </div>

      <div className="display-center-divn">
        <div className="fon-bacraunt">
          <div className="fon-bacraunt-1">
            <img className="img-center" src={image2} alt="" />
          </div>
        </div>
        <div>
          <span className="span01">02</span>
          <h3 className="Tell-h3">Approve your weekly meal plan</h3>
          <p className="The-p">
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>
      </div>

      <div className="display-center-div">
        <div>
          <span className="span01">03</span>
          <h3 className="Tell-h3">Tell us what you like (and what not)</h3>
          <p className="The-p">
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>
        <div className="fon-bacraunt">
          <div className="fon-bacraunt-1">
            <img className="img-center" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
