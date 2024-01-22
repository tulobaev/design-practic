import React from "react";
import image3 from "../../images/meal-1 1 (2).png";
import image4 from "../../images/meal-1 2 (2).png";
import image5 from "../../images/flame (2).png";
import image6 from "../../images/restaurant (1).png";
import image7 from "../../images/Frame 7 (1).png";
import checkmark from "../../images/checkmark1 (1).png";
import Buttonclick from "../../button";

const Dose = () => {
  return (
    <div className="container-section">
      <div className="text-center">
        <span className="MEALS">MEALS</span>
        <h1 className="Omnifood">Omnifood AI chooses from 5,000+ recipes</h1>
      </div>

      <div className="divn-center-class">
        <div className="bag-white-div">
          <img src={image3} alt="" />
          <div className="btn-left-div">
            <Buttonclick label="VEGETARIAN"/>
            <h3 className="Japanese">Japanese Gyozas</h3>
          </div>
          <div className="content-p-center">
            <div className="image-divn-help">
              <img src={image5} alt="" />
              <p className="calories">
                <span className="span-650">650</span> calories
              </p>
            </div>
            <div className="image-divn-help">
              <img src={image6} alt="" />
              <p className="calories">
                NutriScore ® <span className="span-650">74</span>
              </p>
            </div>
            <div className="image-divn-help">
              <img src={image7} alt="" />
              <p className="calories">
                <span className="span-650">4.9</span> rating (537)
              </p>
            </div>
          </div>
        </div>

        <div className="bag-white-div">
          <img src={image4} alt="" />
          <div className="btn-left-div">
            <button className="VEGETARIAN">VEGETARIAN</button>
            <button className="PALEO">PALEO</button>
            <h3 className="Japanese">Avocado Salad</h3>
          </div>
          <div className="content-p-center">
            <div className="image-divn-help">
              <img src={image5} alt="" />
              <p className="calories">
                <span className="span-650">400</span> calories
              </p>
            </div>
            <div className="image-divn-help">
              <img src={image6} alt="" />
              <p className="calories">
                NutriScore ® <span className="span-650">92</span>
              </p>
            </div>
            <div className="image-divn-help">
              <img src={image7} alt="" />
              <p className="calories">
                <span className="span-650">4.8</span> rating (537)
              </p>
            </div>
          </div>
        </div>

        <div className="div-help">
          <h1 className="Works">Works with any diet:</h1>
          <div className="center-p-img">
            <div className="justeful">
              <img src={checkmark} alt="" />
              <p>Vegetarian</p>
            </div>
            <div className="justeful">
              <img src={checkmark} alt="" />
              <p>Vegan</p>
            </div>
            <div className="justeful">
              <img src={checkmark} alt="" />
              <p>Pescatarian</p>
            </div>
            <div className="justeful ">
              <img src={checkmark} alt="" />
              <p>Gluten-free</p>
            </div>
            <div className="justeful">
              <img src={checkmark} alt="" />
              <p>Lactose-free</p>
            </div>
            <div className="justeful">
              <img src={checkmark} alt="" />
              <p>Keto</p>
            </div>
            <div className="justeful">
              <img src={checkmark} alt="" />
              <p>Paleo</p>
            </div>
            <div className="justeful">
              <img src={checkmark} alt="" />
              <p>Low FODMAP </p>
            </div>
            <div className="justeful">
              <img src={checkmark} alt="" />
              <p>Kid-friendly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dose;
