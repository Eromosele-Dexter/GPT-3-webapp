import React from "react";
import "./hero.scss";
import { heroHeading, heroText } from "../../data";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";

const Header = () => {
  return (
    <section className="Hero-section">
      <div className="container">
        <div className="left">
          <h1 className="gradient__text">{heroHeading}</h1>
          <p>{heroText}</p>

          <form>
            <input type="text" placeholder="Email Address" />
            <button type="button">Get started</button>
          </form>

          <div className="people-container">
            <img src={people} alt="people" />
            <p>1,600 people requested access a visit in last 24 hours </p>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={ai} alt="AI" className="ai" />
        </div>
      </div>
    </section>
  );
};

export default Header;
