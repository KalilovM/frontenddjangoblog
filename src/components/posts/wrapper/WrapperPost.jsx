import React from "react";
import styles from "./WrapperPost.module.scss";

export default function WrapperPost({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
