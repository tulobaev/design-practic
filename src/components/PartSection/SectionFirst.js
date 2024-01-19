import React from "react";
import "./SectionFirst.css"
import imgSection1 from "./images/Ellipse 13 (1).png";
import imgSection2 from "./images/Ellipse 14 (1).png";
import imgSection3 from "./images/Ellipse 15 (1).png";
import imgSection4 from "./images/Ellipse 16 (1).png";

import imgSection_01 from "./images/gallery-2 (1).png";
import imgSection_02 from "./images/gallery-5 (1).png";
import imgSection_03 from "./images/gallery-8 (1).png";
import imgSection_04 from "./images/gallery-12 (1).png";

import imgSection_05 from "./images/gallery-3 (1).png";
import imgSection_06 from "./images/gallery-6 (1).png";
import imgSection_07 from "./images/gallery-9 (1).png";
import imgSection_08 from "./images/gallery-1 (1).png";

import imgSection_09 from "./images/gallery-4 (1).png";
import imgSection_010 from "./images/gallery-7 (1).png";
import imgSection_011 from "./images/gallery-10 (1).png";
import imgSection_012 from "./images/gallery-11 (1).png";

const Section = () => {
  return (
    <section>
      <div className="SectionFirst_Container">
        <b>TESTIMONIALS</b>
        <h2>
          Once you try it, you can't go <br />
          back
        </h2>
        <div className="SectionFirst_Boxes">
          <div>
            <div>
              <img src={imgSection1} alt="" />
              <p>
                Inexpensive, healthy and <br />
                great-tasting meals,
                <br />
                without even having to
                <br />
                order manually! It feels truly
                <br />
                magical.
              </p>
              <a>— Dave Bryson</a>
            </div>
            <div>
              <img src={imgSection2} alt="" />
              <p>
                The AI algorithm is crazy <br />
                good, it chooses the right
                <br />
                meals for me every time. It's
                <br />
                amazing not to worry about
                <br />
                food anymore!
              </p>
              <a>— Dave Bryson</a>
            </div>
          </div>

          <div>
            <div>
              <img src={imgSection3} alt="" />
              <p>
                Omnifood is a life saver! <br />
                I just started a company, so <br />
                there's no time for cooking.
                <br />
                I couldn't live without my
                <br />
                daily meals now!
              </p>
              <a>— Steve Miller</a>
            </div>
            <div>
              <img src={imgSection4} alt="" />
              <p>
                I got Omnifood for the <br />
                whole family, and it frees up <br />
                so much time! Plus,
                <br />
                everything is organic and <br />
                vegan and without plastic.
              </p>
              <a>— Hannah Smith</a>
            </div>
          </div>
        </div>
      </div>
      <div className="SectionFirst_Box">
        <div>
          <img src={imgSection_01} alt="" />
          <img src={imgSection_02} alt="" />
          <img src={imgSection_03} alt="" />
          <img src={imgSection_04} alt="" />
        </div>
        <div>
          <img src={imgSection_05} alt="" />
          <img src={imgSection_06} alt="" />
          <img src={imgSection_07} alt="" />
          <img src={imgSection_08} alt="" />
        </div>
        <div>
          <img src={imgSection_09} alt="" />
          <img src={imgSection_010} alt="" />
          <img src={imgSection_011} alt="" />
          <img src={imgSection_012} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Section;