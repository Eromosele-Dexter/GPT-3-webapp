import React from "react";
import "./whatGPT3.scss";
import { WISmainFeature, WISfeatures } from "../../data";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <section className="WGPT3-section">
      <div className="container">
        <div className="heading-content">
          <h1>{WISmainFeature.heading}</h1>
          <p>{WISmainFeature.text}</p>
        </div>
        <div className="library-content">
          <div className="title">
            <h1 className="gradient__text">
              The possibilities are beyond your imagination
            </h1>
          </div>
          <p>Explore the library</p>
        </div>
        <div className="features">
          {WISfeatures.map((feature) => {
            return <Feature {...feature} key={feature.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatGPT3;
