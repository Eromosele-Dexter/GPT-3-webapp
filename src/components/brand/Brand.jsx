import React from "react";
import { brands } from "../../data";
import "./brand.scss";

const Brand = () => {
  return (
    <div className="brand-section">
      <div className="container">
        {brands.map((brand) => {
          return (
            <div key={brand.id} className="brand">
              <img src={brand.img} alt={brand.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brand;
