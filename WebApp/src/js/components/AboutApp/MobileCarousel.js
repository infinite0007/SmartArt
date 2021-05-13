require("../../../stylesheets/_all.scss");
import React from "react";
import {Carousel} from "react-bootstrap";
// Images
import Slider1 from "../../../images/aboutapp/slider1.png";
import Slider2 from "../../../images/aboutapp/slider2.png";
import Slider3 from "../../../images/aboutapp/slider3.png";
import Slider4 from "../../../images/aboutapp/slider4.png";

export default class MobileCarousel extends React.Component {

  render() {
    return (
      <Carousel controls={false}>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-80"
            src={Slider1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-80"
            src={Slider2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-80"
            src={Slider3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-80"
            src={Slider4}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}