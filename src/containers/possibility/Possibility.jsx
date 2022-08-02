import React from "react";
import "./possibility.scss";
import { possibility } from "../../assets";

const Possibility = () => {
  return (
    <section className="Possibility-section">
      <div className="container">
        <div className="possibility-image">
          <img src={possibility} alt="possibility" />
        </div>
        <div className="possibility-content">
          <h4 className="blue">Request Early Access to Get Started</h4>
          <h1 className="gradient__text">
            The possibilities are <br /> beyond your imagination
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <h4 className="red">Request Early Access to Get Started</h4>
        </div>
      </div>
    </section>
  );
};

export default Possibility;
