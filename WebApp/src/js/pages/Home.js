require("../../stylesheets/_all.scss");
import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Cards from "../components/Home/Cards";

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <HeroSection />
        <Cards />
      </div>
    );
  }
}