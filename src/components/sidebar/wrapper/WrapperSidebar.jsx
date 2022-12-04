import React from "react";
import styles from "./WrapperSidebar.module.scss";

export default function WrapperSidebar({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
