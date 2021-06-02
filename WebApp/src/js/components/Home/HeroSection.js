require("../../../stylesheets/_all.scss");
import React from "react";
import { Link } from "react-router-dom";
// Video
import SmartartVideo from "../../../images/smartart/video-1.mp4";

export default class HeroSection extends React.Component {

  render() {
    return (
      <div className="hero-container">
        <video src={SmartartVideo} autoPlay loop muted />
        <h1>GENERIERE NEUE KUNST!</h1>
        <p>Auf was wartest du?</p>
        <div className="hero-btns">
          <Link to="/insertpicture" >
            <button type="button" className="btn--outline--large" onClick={()=> window.scrollTo( 0, 0 )}>LOS GEHTS!</button>
          </Link>
          <Link to="/app" >
            <button style={{marginLeft: '10px'}} type="button" className="btn--primary--large" onClick={()=> window.scrollTo( 0, 0 )}>WIE FUNKTIONIERTS?</button>
          </Link>
        </div>
        <div className="hero-description">
        <p>SmartArt ist eine Anwendung mit der du mithilfe eines Raspberry Pi und einer LED-Matrix Bilder einfach projizieren kannst.<br />
        Diese können mithilfe Deepart zu einer neuen Kunst kreiert und auf dem Raspberry direkt abgespeichert werden.<br />
        Dir wird eine ganz neue Sichtweise von Kunst näher gebracht, auf die du selber Einfluss nehmen kannst.</p>
        </div>
      </div>
    );
  }
}