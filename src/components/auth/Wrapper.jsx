import { Container } from "@mui/material";
import React from "react";
import styles from "./Wrapper.module.scss";

export default function Wrapper({ children }) {
  return (
    <Container className={styles.wrapper} maxWidth="xs">
      {children}
    </Container>
  );
}
