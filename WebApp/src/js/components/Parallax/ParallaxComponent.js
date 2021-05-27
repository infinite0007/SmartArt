require("../../../stylesheets/_all.scss");
import React from "react";
// Images
import Bg from "../../../images/art/parallaxassets/bg.jpg";
import Moon from "../../../images/art/parallaxassets/moon.png";
import Mountain from "../../../images/art/parallaxassets/mountain.png";
import Town from "../../../images/art/parallaxassets/town.png";

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
    let town = document.getElementById("town");
    let text = document.getElementById("text");

    var value = window.scrollY;
  
    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.02 + 'px';
    town.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
  }

  render() {

    return (
      <section className="art-section">
        <img src={Bg} id="bg" className="art-img"/>
        <img src={Moon} id="moon" className="art-img"/>
        <img src={Mountain} id="mountain" className="art-img"/>
        <img src={Town} id="town" className="art-img"/>
        <h1 id="text" className="bigHeader">Kunst</h1>
      </section>
    );
  }
}
