import React from "react";
import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Hero,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <header>
          <Navbar />
        </header>

        <Hero />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      {/* <Blog /> */}
      {/* <Footer />  */}
    </div>
  );
};

export default App;
