import styles from "./NavbarWrapper.module.scss";
const NavbarWrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default NavbarWrapper;
