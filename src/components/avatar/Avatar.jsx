import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Avatar.module.scss";


export default function Avatar() {
  return (
    <Container className="mt-lg-5 mt-md-4 mt-sm-2 mt-2">
      <Row>
        <Col lg={"auto"} md={2} sm={12}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 150"
            width="100"
            height="100"
          >
            <rect
              x="0"
              y="0"
              width="150"
              height="150"
              rx="30.0"
              ry="30.0"
              fill="#886451"
            />
            <text
              text-anchor="middle"
              fill="white"
              x="75.0"
              y="93.0"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "50.0px",
                letterSpacing: "0.05em",
              }}
            >
              MK
            </text>
          </svg>
        </Col>
        <Col className="col-auto flex-column d-flex justify-content-center">
          <h3>Marlen Kalilov</h3>
          <a href="certs/">Мои сертификаты</a>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}
