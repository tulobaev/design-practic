import React from "react";
import "../header/header.css";
import { healthlyFood } from "../../utilits/data";
import { data } from "../../utilits/data";
import png1 from "../../images/Ellipse 1.png";
import png2 from "../../images/Ellipse 2.png";
import png3 from "../../images/Ellipse 3.png";
import png4 from "../../images/Ellipse 4.png";
import png5 from "../../images/Ellipse 5.png";
import png6 from "../../images/Ellipse 6.png";
import imageFood from "../../images/Rectangle 10.png";
import imageFood2 from "../../images/Rectangle 11.png";
import imageFood3 from "../../images/Rectangle 12.png";
import techcrunch from "../../images/techcrunch 1.png";
import insider from "../../images/business-insider 1.png";
import newYork from "../../images/the-new-york-times 1.png";
import forbes from "../../images/forbes 1.png";
import usa from "../../images/usa-today 1.png";
const Section = () => {
  return (
    <div>
      <div className="container">
        <div className="data">
          <h1>{healthlyFood}</h1>
          <p>{data}</p>
          <div>
            <button className="btnStart">Start eating well</button>
            <button className="btnLearn">Learn more</button>
          </div>
          <div className="containerPng">
            <div className="pngContainer">
              <img src={png1} alt="" />
              <img className="png1" src={png2} alt="" />
              <img className="png2" src={png3} alt="" />
              <img className="png3" src={png4} alt="" />
              <img className="png4" src={png5} alt="" />
              <img className="png5" src={png6} alt="" />
            </div>
            <div className="spanText">
              <span className="text">250,000+</span>
              <span className="text2">meals delivered last yeat!</span>
            </div>
          </div>
        </div>
        <div>
          <img src={imageFood} alt="" />
          <img className="imageFood1" src={imageFood2} alt="" />
          <img className="imageFood2" src={imageFood3} alt="" />
        </div>
      </div>

      <div>
        <h1 className="as">AS FEATURED IN</h1>
        <div className="compani">
          <img src={techcrunch} alt="" />
          <div>
            <img src={insider} alt="" />
          </div>
          <div>
            <img src={newYork} alt="" />
          </div>
          <div>
            <img src={forbes} alt="" />
          </div>
          <img src={usa} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section;
