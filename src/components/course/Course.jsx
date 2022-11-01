import React from "react";
import styles from "./Course.module.scss"
import classNames from "classnames";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, ProgressBar } from "react-bootstrap";

export default function Course() {
  return (
    <Container>
      <Row className={classNames(`${styles.course} p-3`)}>
        <Col className="d-flex">
          <img
            width={100}
            height={100}
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/40/45d53f15db4da492c650debdbd1368/GettyImages-1384894514.jpg"
            alt="#"
          />
          <div className={classNames(`flex-column ${styles.content}`)}>
            <p>Author</p>
            <h2>Course name</h2>
            <ProgressBar
              now={20}
              label={`20%`}
              className={styles.progressbar}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
