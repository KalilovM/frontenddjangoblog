import React from "react";
import styles from "./CustomNav.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

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
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/">Blog</Link>
            <Link className="nav-link" to="/">Courses</Link>
            <Link className="nav-link" to="/auth">Profile</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
