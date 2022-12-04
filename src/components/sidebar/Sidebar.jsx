import React from "react";
import WrapperSidebar from "./wrapper/WrapperSidebar";
import styles from "./Sidebar.module.scss";
import Image from "next/image";
import Club from "../../../public/club.png";

export default function Sidebar() {
  return (
    <WrapperSidebar>
      <div className={styles.wrapper}>
        <header className={styles.headerBlock}>
          <div className={styles.headerContainer}>
            <h2 className={styles.title}>Best blogs</h2>
          </div>
        </header>
        <div className={styles.content}>
          <div className={styles.clubsRaiting}>
            <a className={styles.clubItem} href="#">
              <div className={styles.image}>
                <Image src={Club} alt="cover" width="36" />
              </div>
              <span className={styles.name}>ITCLUB.COM</span>
              <span className={styles.raiting}>1802.01</span>
            </a>
          </div>
        </div>
        <footer className={styles.footerBlock}>
          <a href="#" className={styles.footerTitle}>
            Best blogs
          </a>
        </footer>
      </div>
    </WrapperSidebar>
  );
}
