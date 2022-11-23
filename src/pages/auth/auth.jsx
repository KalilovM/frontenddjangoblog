import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styles from "./auth.module.scss";
import { Instance } from "../../services/axios/axios";
import auth from "../../store/auth";

function Auth() {
    // TODO: не позволять нажать на кнопку если поля не заполнены
    // TODO: handle server errors
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const submit = (response) => {
        Instance.post("token/create/", response).then((result) => {
            localStorage.setItem("access", result.data.access);
            localStorage.setItem("refresh", result.data.refresh);

            auth.loggedIn();
            navigate("/");
        });
    };
    return (
        <>
            <form onSubmit={handleSubmit(submit)} className={styles.container}>
                <h1>Логин</h1>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="username"
                    {...register("username")}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    {...register("password")}
                />
                <input type="submit" className={styles.submit_input} />
            </form>
            <div className={`${styles.container} ${styles.small_container}`}>
                <span>
                    Еще не зарегестрированы? <Link to="/signup">Регистрация</Link>
                </span>
            </div>
        </>
    );
}

export default Auth;
