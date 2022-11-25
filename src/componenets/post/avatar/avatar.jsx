import React from "react";
import styles from "./avatar.module.scss";
import { DateTimeFormatter } from "../../../helpers/DateTimeFormatter";

function Avatar(props) {
    return (
        <div className={styles.container}>
            <img src={props.avatar} alt="avatar" />
            <p>
                <b>{props.username}</b>
            </p>
            <p className={styles.date_time}>{DateTimeFormatter(props.date)}</p>
        </div>
    );
}

export default Avatar;
