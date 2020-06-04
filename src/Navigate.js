import React from "react";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
const image = require("./db-logo.png");
const Navigate = ({ include }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <Image src={image} style={{ height: 20, width: 20 }} />
        DBOI Home
      </Navbar.Brand>
      <Nav.Link href="/signup">Signup</Nav.Link>
      <Nav.Link href="/signin">Signin</Nav.Link>
    </Navbar>
  );
};

export default Navigate;
