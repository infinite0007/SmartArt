require("../../../stylesheets/_all.scss");
import React from "react";
import { Link } from "react-router-dom";
// Video
import SunsetlyVideo from "../../../images/sunsetly/video-1.mp4";

export default class HeroSection extends React.Component {

  render() {
    return (
      <div className="hero-container">
        <video src={SunsetlyVideo} autoPlay loop muted />
        <h1>AUF ZUM ABENTEUER!</h1>
        <p>Auf was wartest du?</p>
        <div className="hero-btns">
          <Link to="/app" >
            <button type="button" className="btn--outline--large" onClick={()=> window.scrollTo( 0, 0 )}>LOS GEHTS!</button>
          </Link>
          <Link to="/ranking" >
            <button style={{marginLeft: '10px'}} type="button" className="btn--primary--large" onClick={()=> window.scrollTo( 0, 0 )}>VERGLEICHE MICH</button>
          </Link>
        </div>
        <div className="hero-description">
        <p>Sunsetly ist eine Anwendung mit der du deine Gesundheit und Fitness mit einem für dich abgestimmten Coach auf eine neue Ebene bringen kannst.<br />
        Diese Webapp dient hierbei als Erweiterung der App und nicht als Ersatz. Trainingspläne, Statistiken, Rankings<br />
        und verschiedene Personalisierungen stehen dir hier zur Verfügung.</p>
        </div>
      </div>
    );
  }
}