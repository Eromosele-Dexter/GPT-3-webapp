import React from "react";
import "./feature.scss";
const Feature = ({ heading, text }) => (
  <div className="Feature">
    <div className="feature-title">
      <h1>{heading}</h1>
      <div />
    </div>
    <div className="feature-text">
      <p>{text}</p>
    </div>
  </div>
);
export default Feature;
