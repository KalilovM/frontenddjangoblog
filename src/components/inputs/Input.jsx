import React from "react";
import styles from "./Input.module.scss";

export default function Input(props) {
  return (
    <div className={styles.container}>
      <label htmlFor={props.type}>{props.title}</label>
      <input type={props.type} id={props.type} {...props.register}></input>
    </div>
  );
}
