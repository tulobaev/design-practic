import React from "react";
import "./SectionThird.css";
import imgSectionThird from "./images/Rectangle 14 (1).png";

const SectionThird = () => {
  return (
    <div className="Section_third">
      <div>
        <h2>Get your first meal for free!</h2>
        <p>
          Healthy, tasty and hassle-free meals are waiting for you. Start eating
          well <br />
          today. You can cancel or pause anytime. And the first meal is on us!
        </p>
        <div className="Section_third_div_box">
          <div className="thirdBox">
            <b>Full Name</b>
            <div className="Section_third_input">
              <input type="text" placeholder="John Smith" />{" "}
            </div>
            <b>Where did you hear from us?</b>
            <div className="Section_third_input">
              <select>
                <option className="option">Please choose one option:</option>
                <option>Friends and family</option>
                <option>YouTube video</option>
                <option>Podcast</option>
                <option>Facebook ad</option>
                <option>Others</option>
              </select>
            </div>
          </div>
          <div className=" thirdBox_1">
            <b>Email address</b>
            <div className="Section_third_input">
              <input email="text" placeholder="me@exapmle.com" />
            </div>
            <button>Sign up now</button>
          </div>
        </div>
      </div>
      <img src={imgSectionThird} alt="" />
    </div>
  );
};

export default SectionThird;
