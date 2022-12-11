import styles from "./AuthWrapper.module.scss";

const AuthWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default AuthWrapper;
