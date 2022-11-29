import React from "react";
import SearchIcon from "../../../public/svg/navbar/search.jsx";
import Notification from "../../../public/svg/navbar/bell.jsx";
import CreateIcon from "../../../public/svg/navbar/pencil.jsx";
import UserIcon from "../../../public/svg/navbar/user.jsx";
import { Container } from "@mui/material";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router.js";
import { Auth } from "../../store/Auth.js";

const Navbar = () => {
  const router = useRouter();

  return (
    <header className={styles.wrapper}>
      <Container maxWidth="md" className={styles.container}>
        <ul className={styles.left_items}>
          <li
            className={router.pathname == "/" ? styles.active_item : ""}
            key="feed"
          >
            Feed
          </li>
          <li
            className={router.pathname == "/feed" ? styles.active_item : ""}
            key="discover"
          >
            Discover
          </li>
          <li
            className={router.pathname == "/ml" ? styles.active_item : ""}
            key="develoopment"
          >
            Development
          </li>
          <li>DevOps</li>
          <li>Machine Lerning</li>
        </ul>
        <ul className={styles.right_items}>
          {Auth.authState ? (
            <>
              {" "}
              <SearchIcon />
              <Notification />
              <CreateIcon />{" "}
            </>
          ) : (
            <>
              <SearchIcon />
              <UserIcon />
            </>
          )}
        </ul>
      </Container>
    </header>
  );
};

export default Navbar;
