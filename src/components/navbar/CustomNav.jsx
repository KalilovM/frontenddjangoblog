import React from "react";
import styles from "./CustomNav.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function CustomNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="mx-5">
        <Navbar.Brand href="#">AInML</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link>
            <Nav.Link href="#action2">Courses</Nav.Link>
            <Nav.Link href="#action2">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
