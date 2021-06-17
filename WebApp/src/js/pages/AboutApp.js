require("../../stylesheets/_all.scss");
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import DeepartCarousel from "../components/AboutApp/DeepartCarousel";

export default class AboutApp extends React.Component {
  render() {
    return (
      <div  className="aboutapp">
        <Container>
          <h1 className="smallHeader">Wie funktioniert SmartArt?</h1>
          <Row>
            <Col xs={6} md={{ span: 4, offset: 2 }}>
              <DeepartCarousel/>
            </Col>
            <Col xs={6} md={4}>
              <p>
                Die SmartArt WebApp dient dazu, Bilder über die LED-Matrix zu steuern.
                Laden Sie ein gewünschtes Bild hoch und lassen sie es direkt anzeigen.<br /><br />
                Auch kann ganz künstlerisch verschiedene Bilder mit Stilen kombiniert werden.
                Wenn gewünscht können diese auch direkt auf die Matrix projiziert werden.
                So können ganz neue Kunstwerke entstehen und Künstler wieder zum Leben erweckt werden!<br /><br />
                Sie verfügen über jegliche Freiheiten, wie und vor allem was auf der Matrix erscheinen soll.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}