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
                1. Clonen Sie sich das aktuelle Projekt über: <a href="https://github.com/" target="_blank">Github</a><br />
                2. Wechseln sie in den Smartart Ordner<br />
                3. Mit dem Befehl #npm install werden nun alle Dependencies heruntergeladen<br />
                4. Im Ordner WebApp kann nun mit dem Befehl #npm start der Server zeitgleich mit der Website gestartet werden<br />
                5. Die Website steht nun in ihrem Netz unter der in dem in der Konsole genannten Link zur verfügung<br />
                6. Nun kann das Menü im Logik Ordner der Matrix mithilfe des Befehls #sudo python3 main.py gestartet werden
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}