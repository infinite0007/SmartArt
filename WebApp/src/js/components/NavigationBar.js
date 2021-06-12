require("../../stylesheets/_all.scss");
import React from "react";
import {Navbar, Nav} from "react-bootstrap";
// Images
import SmartartLogo from "../../images/smartart/smartart_logo.png";

// Ändert immer nur die URL zu /[abkürzung]
function NavigationBar(props) {

  const logoImageNav = {
    width: 30,
    marginRight: '0.4vh'
  };
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
          <img
            alt="SmartartLogo"
            src={SmartartLogo}
            style={logoImageNav}
            className="d-inline-block align-top"
          />
          SmartArt
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Startseite</Nav.Link>
          <Nav.Link href="#app">Wie funktionierts</Nav.Link>
          <Nav.Link href="#insertpicture">Bild übertragen</Nav.Link>
          <Nav.Link href="#art">Kunst</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default (NavigationBar);