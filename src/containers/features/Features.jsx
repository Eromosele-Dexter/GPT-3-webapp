import React from "react";
import "./features.scss";
import { Feature } from "../../components";

const featuresData = [
  {
    id: 1,
    heading: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    id: 2,
    heading: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    id: 3,
    heading: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    id: 4,
    heading: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among are leave law built now. In built table in an rapid blush..",
  },
];

const Features = () => (
  <section className="Features " id="features">
    <div className="container">
      <div className="features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="features-container">
        {featuresData.map((item) => (
          <Feature {...item} key={item.id} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
