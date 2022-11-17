import React from 'react';
import styles from "./avatar.module.scss"

function Avatar(props) {
    console.log(props)
    return (
        <div className={styles.container}>
            <img
                src={props.avatar}
                alt="avatar"
            />
            <p><b>{props.username}</b></p>
            <p className={styles.date_time}>{Date(props.date)}</p>
        </div>
    );
}

export default Avatar;