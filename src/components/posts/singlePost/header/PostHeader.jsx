import Link from "next/link";
import React from "react";
import styles from "./PostHeader.module.scss";
// import DateTimeFormat from "../../../../auth/helpers/dateTimeFormat/DateTimeFormat";

export default function PostHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>{/* svg */}</div>
      <Link className={styles.username} href="#">
        HelloKitty
      </Link>
      <div className={styles.date}>
        {/* {DateTimeFormat()} */}
        <p>yesterday at 12:00 PM</p>
      </div>
    </div>
  );
}
