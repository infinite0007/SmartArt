require("../../stylesheets/_all.scss");
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import MobileCarousel from "../components/AboutApp/MobileCarousel";

export default class AboutApp extends React.Component {
  render() {
    return (
      <div  className="aboutapp">
        <Container>
          <h1 className="smallHeader">Wie bekomme ich eine Sunsetly ID?</h1>
          <Row>
            <Col xs={6} md={{ span: 4, offset: 2 }}>
              <MobileCarousel/>
            </Col>
            <Col xs={6} md={4}>
              <p>
                1. Laden Sie sich das aktuelle Android Studio Projekt herunter über: <a href="https://github.com/" target="_blank">Github</a><br /><br />
                2. Deployen und installieren Sie das Projekt auf ihrem Android Gerät<br /><br />
                3. Geben Sie Ihren BMI wie in der App beschrieben an<br /><br />
                4. Nun bekommen Sie eine ID mit der Sie sich einloggen können
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}