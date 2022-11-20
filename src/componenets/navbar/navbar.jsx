import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.scss";
import profile from "../../static/img/user-logo.svg";

function Navbar() {
    const [isAuth, setIsAuth] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);
    React.useEffect(() => {
        const access = localStorage.getItem("access");
        const refresh = localStorage.getItem("refresh");

        if (!access && !refresh) {
            setIsAuth(false);
        }
        setIsAuth(true);
    }, []);

    const Logout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        navigate("/auth");
    };
    const ClickedDrop = () => {
        setClicked((prev) => !prev);
    };
    const navigate = useNavigate();
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <ul className={styles.navbar_items}>
                    <li>
                        <Link to="#">Home</Link>
                    </li>
                    <li>
                        <Link to="#">Home</Link>
                    </li>
                    <li>
                        <Link to="#">Home</Link>
                    </li>
                </ul>
                {!isAuth ? (
                    <ul className={styles.active_buttons}>
                        <Link to="/auth" className={styles.auth}>
                            <li>Login</li>
                        </Link>
                        <Link to="/signup" className={styles.signup}>
                            <li>Signup</li>
                        </Link>
                    </ul>
                ) : (
                    <div
                        onClick={ClickedDrop}
                        className={styles.dropdown_menu}
                        style={{
                            height: 30,
                            width: 30,
                            background: `url(${profile})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div
                            className={styles.dropdown_content}
                            style={{ opacity: clicked ? 1 : 0 }}
                        >
                            <Link to="/profile">Profile</Link>
                            <Link to="/create">Create post</Link>
                            <button onClick={Logout}>Logout</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
