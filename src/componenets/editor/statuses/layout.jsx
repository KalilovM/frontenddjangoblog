import React from 'react';
import Success from "./success";
import styles from "./layout.module.scss"

//todo think about how to make this component more flexible
function Layout() {
    return (
        <div className={styles.wrapper}>
            <Success />
        </div>
    );
}

export default Layout;
