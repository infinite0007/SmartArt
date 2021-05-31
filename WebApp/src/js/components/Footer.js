require("../../stylesheets/_all.scss");
import React from "react";
import {Nav} from "react-bootstrap";
// Images
import SunsetlyLogo from "../../images/sunsetly/sunsetly_logo.png";

export default class Footer extends React.Component {

  render() {
    const logoImage = {
      width: 30,
      marginRight: '0.4vh'
    };

    return (
      <div className="footer-container">
      <section className="footer-section">
        <div className="footer-section-wrap">
            <Nav.Link href="#home" onClick={()=> window.scrollTo( 0, 0 )}>
              <div className="logoBottom">
                <img
                  alt="SunsetlyLogo"
                  src={SunsetlyLogo}
                  style={logoImage}
                  className="d-inline-block align-top"
                />
                SmartArt
              </div>
            </Nav.Link>
            <Nav.Link href="#app" className="logoBottom" onClick={()=> window.scrollTo( 0, 0 )}>
              Du wolltest schon immer deine eigene Kunst kreieren & anzeigen? Dann los!
            </Nav.Link>
          <small className="website-rights">SmartArt {(new Date().getFullYear())} - Systemadministration<br/>Sebastian Jäger & Julian Lingnau</small>
        </div>
      </section>
    </div>
    );
  }
}