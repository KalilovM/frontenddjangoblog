import React from "react";
import styles from "./SubmitInput.module.scss";
export default function SubmitInput(props) {
  return (
    <input className={styles.input} type="submit">
      {props.children}
    </input>
  );
}
