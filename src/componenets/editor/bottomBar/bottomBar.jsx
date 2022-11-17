import React from 'react';
import styles from "./bottomBar.module.scss";

function BottomBar(props) {
    return (
        <div className={styles.bottom_bar}>
            <div>
                {props.buttons.map(value =>
                    (<button
                        key={value.name}
                        onClick={value.onclick}
                        className={value.disabled ? styles.disabled : styles.active}
                    >{value.name}</button>)
                )}

            </div>
        </div>
    );
}

export default BottomBar;