import React from "react";
import "./Footer.css";
import footerimg from "../../images/omnifood-logo 2.png"
const Footer = () => {
  return (
    <div>
      <footer className="footer-container">
        <div className="footers-img">
          <img src={footerimg} alt="logo" />
          <p>
            Copyright © 2027 by <br /> Omnifood, Inc. All rights <br />{" "}
            reserved.
          </p>
        </div>
        <div>
          <span>Contact us</span>
         <div className="containerP">
         <p>
            623 Harrison St., 2nd Floor, <br /> San Francisco, CA 94107
          </p>
          <p>
            415-201-6370 <br />
            hello@omnifood.com
          </p>
         </div>
        </div>
        <div>
          <span>Account</span>
         <div className="containerP">
         <p>Create account</p>
          <p>Sign in</p>
          <p>iOS app</p>
          <p>Android app</p>
         </div>
        </div>
        <div>
          <span>Company</span>
          <div className="containerP">
          <p>About Omnifood</p>
          <p>For Business</p>
          <p>Cooking partners</p>
          <p>Careers</p>
          </div>
        </div>
        <div>
          <span>Resources</span>
          <div className="containerP">
          <p>Recipe directory</p>
          <p>Help center</p>
          <p>Help center</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
