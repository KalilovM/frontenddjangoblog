import styles from "./NavbarWrapper.module.scss"
const NavbarWrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}

export default NavbarWrapper
