import React from "react";
import "./footer.scss";
import { logoSvg } from "../../assets";

const Footer = () => {
  return (
    <footer className="Footer">
      <section>
        <div className="container">
          <div className="footer-heading">
            <h1 className="gradient__text">
              Do you want to step in to the future before others
            </h1>
            <button>Request Early Access</button>
          </div>

          <div className="footer-links">
            <div className="logo">
              <img src={logoSvg} alt="gpt3_logo" />
              <p>
                Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
              </p>
            </div>
            <div className="links">
              <h4>Links</h4>
              <p>Overons</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Contact</p>
            </div>
            <div className="links">
              <h4>Company</h4>
              <p>Terms & Conditions </p>
              <p>Privacy Policy</p>
              <p>Contact</p>
            </div>
            <div className="links">
              <h4>Get in touch</h4>
              <p>Crechterwoord K12 182 DK Alknjkcb</p>
              <p>085-132567</p>
              <p>info@payme.net</p>
            </div>
          </div>

          <div className="copyright">
            <p>@2022 GPT-3 by Dexter Eromosele. All rights reserved.</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
