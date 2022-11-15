import React from 'react';
import {Link} from "react-router-dom";
import styles from "./navbar.module.scss"

function Navbar(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
            <ul className={styles.navbar_items}>
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">Home</Link></li>
            </ul>
            <ul className={styles.active_buttons}>
                <Link to="/auth" className={styles.auth}><li>Login</li></Link>
                <Link to="/signup" className={styles.signup}><li >Signup</li></Link>
            </ul>
            </div>
        </div>
    );
}

export default Navbar;