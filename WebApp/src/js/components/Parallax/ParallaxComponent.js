require("../../../stylesheets/_all.scss");
import React from "react";
// Images
import Bg from "../../../images/ranking/parallaxassets/bg.jpg";
import Moon from "../../../images/ranking/parallaxassets/moon.png";
import Mountain from "../../../images/ranking/parallaxassets/mountain.png";
import Road from "../../../images/ranking/parallaxassets/road.png";

export default class ParallaxComponent extends React.Component {

  constructor(props){
    super(props);
    this.onScroll = this.onScroll.bind(this); //bind function once
  }

  componentDidMount() { // Bei Rendern der Komponent wird nun der Eventlistener auf Scrollen hören
      window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() { // Eventlistener muss nun auch wieder entfernt werden, sonst werden in anderen Components immernoch auf Scrollen gehört was errors wirft da die Daten dort nicht existieren
      window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    let bg = document.getElementById('bg');
    let moon = document.getElementById("moon");
    let mountain = document.getElementById("mountain");
    let road = document.getElementById("road");
    let text = document.getElementById("text");

    var value = window.scrollY;
  
    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
  }

  render() {

    return (
      <section className="ranking-section">
        <img src={Bg} id="bg" className="ranking-img"/>
        <img src={Moon} id="moon" className="ranking-img"/>
        <img src={Mountain} id="mountain" className="ranking-img"/>
        <img src={Road} id="road" className="ranking-img"/>
        <h1 id="text" className="bigHeader">Ranking</h1>
      </section>
    );
  }
}
