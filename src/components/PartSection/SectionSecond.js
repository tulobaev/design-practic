import React from "react";
import "./SectionSecond.css";
import Buttonclick from "../../button";

const SectionSecond = () => {
  const clickButtonClick = () => {
    console.log("Кнопка нажата");
  };
  return (
    <div className="SectionSecond_BigDiv">
      <b>PRICING</b>
      <h2>Eating well without breaking the bank</h2>
      <div className="SectionSecond_DivBig">
        <div className="SectionSecond_div">
          <b>STARTER</b>
          <h1>$ 399</h1>
          <p>per month. That's just $13 per meal!</p>
          <ul>
            <li>1meal per day </li>
            <li> Order from 11am to 9pm</li>
            <li> Delivery is free</li>
            <li className="SectionSecond_li"> Get access to latest recipes </li>
          </ul>
          <Buttonclick label="Start eating well" onClick={clickButtonClick} />
        </div>
        <div className="SectionSecond_div_1">
          <b>COMPLETE</b>
          <h1>$ 649</h1>
          <p>per month. That's just $11 per meal!</p>
          <ul>
            <li> 2 meal per day </li>
            <li> Order 24/7</li>
            <li> Delivery is free</li>
            <li> Get access to latest recipes </li>
          </ul>
          <Buttonclick label="Start eating well" onClick={clickButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default SectionSecond;
