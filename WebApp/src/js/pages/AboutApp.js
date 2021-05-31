require("../../stylesheets/_all.scss");
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import DeepartCarousel from "../components/AboutApp/DeepartCarousel";

export default class AboutApp extends React.Component {
  render() {
    return (
      <div  className="aboutapp">
        <Container>
          <h1 className="smallHeader">Wie bekomme ich ein Bild auf meine Matrix?</h1>
          <Row>
            <Col xs={6} md={{ span: 4, offset: 2 }}>
              <DeepartCarousel/>
            </Col>
            <Col xs={6} md={4}>
              <p>
                1. Laden Sie sich das aktuelle Projekt herunter über: <a href="https://github.com/" target="_blank">Github</a><br /><br />
                2. Deployen und installieren Sie das Projekt auf ihrem Raspberry Pi<br /><br />
                3. Geben Sie Ihren ...<br /><br />
                4. Nun bekommen können sie mithilfe des Menüs die Modi wählen.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}