import React from "react";

import Header from "../src/components/Header";
import HomeSlider from "../pages/home/SliderSection";

import Logo from "../public/images/logo/logo-dark.svg";

const Home = () => {
  return (
    <div className="index-two" data-menu="fixed">
      <Header headerLogo={Logo} headerLogoLight={Logo} />

      <main className="ms-main">
        <HomeSlider />
      </main>
    </div>
  );
};

export default Home;
