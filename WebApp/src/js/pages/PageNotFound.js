require("../../stylesheets/_all.scss");
import React from "react";
import {Container, Nav} from "react-bootstrap";

// PageNotFound 404 Error -> Wenn falsche Route eingegeben wurde oder User sich vertippt hat,
// Wird man immer zu dieser Seite weitergeleitet, mit der man wieder zu Home kommt.
export default class PageNotFound extends React.Component {

  render() {
    return (
      <div  className="pagenotfound">
        <Container>
          <h1 className="smallHeader" style={{paddingTop: '600px'}}>Diese Seite existiert nicht.<br />
          <Nav.Link href="#home">
            <button type="button" className="btn--outline--large" onClick={()=> window.scrollTo( 0, 0 )}>BRING MICH ZURÜCK</button>
          </Nav.Link></h1>
        </Container>
      </div>
    );
  }
}