import styles from "./Navbar.module.scss";
import Link from "next/link";
import classNames from "classnames";
import NavbarWrapper from "../layouts/navbarWrapper/NavbarWrapper";
import React from "react";

const Navbar = () => {
  const [activeProfile, setActiveProfile] = React.useState(false);
  const profileClick = () => {
    setActiveProfile((prev) => !prev);
  };
  return (
    <NavbarWrapper>
      <header className={styles.wrapper}>
        <nav className={styles.container}>
          <ul className={styles.container__left}>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Test</Link>
            </li>
            <li>
              <Link href="#">Drive</Link>
            </li>
          </ul>
          <ul className={styles.container__right}>
            <li>
              <span href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.02 2.91C8.71003 2.91 6.02003 5.6 6.02003 8.91V11.8C6.02003 12.41 5.76003 13.34 5.45003 13.86L4.30003 15.77C3.59003 16.95 4.08003 18.26 5.38003 18.7C9.69003 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13.87 3.2C12.6607 2.85559 11.3793 2.85559 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2V3.2Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.90002 21.18C9.33818 20.6173 9.02181 19.8552 9.02002 19.06"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                </svg>
              </span>
            </li>
            <li>
              <span
                onClick={profileClick}
                className={classNames(styles.container__profile, {
                  [styles.container__profile_active]: activeProfile,
                })}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C10.6822 10.831 9.59461 10.3468 8.7976 9.51995C8.00059 8.69307 7.55671 7.58844 7.55997 6.43999C7.55997 3.98999 9.53997 1.99999 12 1.99999C12.5824 1.98948 13.1612 2.0938 13.7033 2.30697C14.2454 2.52014 14.7402 2.838 15.1594 3.2424C15.5787 3.6468 15.9142 4.12982 16.1468 4.66388C16.3793 5.19794 16.5045 5.77258 16.515 6.35499C16.5255 6.9374 16.4212 7.51618 16.208 8.05828C15.9948 8.60038 15.677 9.09518 15.2726 9.51444C14.8682 9.9337 14.3851 10.2692 13.8511 10.5018C13.317 10.7344 12.7424 10.8595 12.16 10.87V10.87ZM7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56V14.56Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className={styles.container__dropdown}>
                  <div className={styles.dropdown__body}>
                    <div className={styles.dropdown__header}>
                      <div className={styles.dropdown__header_container}>
                        <Link
                          className={styles.dropdown__auth_button}
                          href="login"
                        >
                          Login
                        </Link>
                        <Link
                          className={classNames(
                            styles.dropdown__auth_button,
                            styles.dropdown__auth_button_primary
                          )}
                          href="register/"
                        >
                          Registrations
                        </Link>
                      </div>
                    </div>
                    <div className={styles.dropdown__top}>
                      <Link className={styles.dropdown__top_link} href="#">
                        How to become author
                      </Link>
                      <Link className={styles.dropdown__top_link} href="#">
                        Website rules
                      </Link>
                    </div>
                  </div>
                </div>
              </span>
            </li>
          </ul>
        </nav>
      </header>
    </NavbarWrapper>
  );
};

export default Navbar;
