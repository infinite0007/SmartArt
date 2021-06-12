require("../../../stylesheets/_all.scss");
import React from "react";
import {Carousel} from "react-bootstrap";
// Images
import Slider1 from "../../../images/aboutapp/slider1.png";
import Slider2 from "../../../images/aboutapp/slider2.png";
import Slider3 from "../../../images/aboutapp/slider3.png";
import Slider4 from "../../../images/aboutapp/slider4.png";
import Slider5 from "../../../images/aboutapp/slider5.png";

export default class DeepartCarousel extends React.Component {

  render() {
    return (
      <Carousel controls={false}>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={Slider1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={Slider2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100"
            src={Slider3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={Slider4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={Slider5}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}