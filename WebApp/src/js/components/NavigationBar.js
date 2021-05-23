require("../../stylesheets/_all.scss");
import React from "react";
import {Navbar, Nav} from "react-bootstrap";
// Images
import SunsetlyLogo from "../../images/sunsetly/sunsetly_logo.png";

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
            alt="SunsetlyLogo"
            src={SunsetlyLogo}
            style={logoImageNav}
            className="d-inline-block align-top"
          />
          Sunsetly
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#app">App</Nav.Link>
          <Nav.Link href="#art">Art</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default (NavigationBar);