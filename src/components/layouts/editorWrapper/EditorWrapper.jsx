import React from "react";
import styles from "./EditorWrapper.module.scss";

export default function EditorWrapper({ children }) {
	return <div className={styles.wrapper}>{children}</div>;
}
