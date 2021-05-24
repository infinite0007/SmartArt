require("../../stylesheets/_all.scss");
import {Container, Row, Col, Button} from "react-bootstrap";
import React, { useState } from "react";

function InsertPicture() {

  const [state , setState] = useState({selectedFile: null})

  const onChangeHandler = (e) => {
    console.log(e.target.files[0]) // Nur zum prüfen welche File für Entwicklung

    setState({
      selectedFile: e.target.files[0],
      loaded: 0,
    })
  }

  const onClickHandler = () => {//Weiterarbeiten
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
  }

  return (
    <div  className="aboutapp">
      <Container>
        <h1 className="smallHeader">Lassen Sie ein Bild direkt auf der Matrix anzeigen!</h1>
        <Row>
          <Col xs={6} md={{ span: 4, offset: 2 }}>
            <input type="file" name="file" onChange={onChangeHandler}/>
            <Button variant="success" onClick={onClickHandler}>Hochladen</Button>
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

export default (InsertPicture);