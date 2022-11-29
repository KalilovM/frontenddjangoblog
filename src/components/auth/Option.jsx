import { Container } from "@mui/material";
import React from "react";
import styles from "./Option.module.scss";

export default function Option(props) {
  return (
    <Container maxWidth="xs" className={styles.wrapper}>
      <p>
        {props.text} <span onClick={props.click}>{props.clickText}</span>
      </p>
    </Container>
  );
}
