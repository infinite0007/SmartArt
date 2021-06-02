require("../../stylesheets/_all.scss");
import React from "react";
import {Nav} from "react-bootstrap";
// Images
import SmartartLogo from "../../images/smartart/smartart_logo.png";

export default class Footer extends React.Component {

  render() {
    const logoImage = {
      width: 60,
      marginRight: '0.7vh'
    };

    return (
      <div className="footer-container">
      <section className="footer-section">
        <div className="footer-section-wrap">
            <Nav.Link href="#home" onClick={()=> window.scrollTo( 0, 0 )}>
              <div className="logoBottom">
                <img
                  alt="SmartartLogo"
                  src={SmartartLogo}
                  style={logoImage}
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