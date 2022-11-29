import { Container } from "@mui/material";
import React from "react";
import styles from "./WrapperGrid.module.scss";

export default function WrapperGrid({ children }) {
  return (
    <Container maxWidth="lg" className={styles.wrapper}>
      {children}
    </Container>
  );
}
