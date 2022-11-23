import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styles from "./auth.module.scss";
import { Instance } from "../../services/axios/axios";
import auth from "../../store/auth";

function Signup() {
    // todo не позволять нажать на кнопку если поля не заполнены

    const { register, handleSubmit } = useForm();
    const [sign, setSign] = React.useState(false);
    const naviagate = useNavigate();
    const submit = (response) => {
        Instance.post("users/", response).then((result) => {
            Instance.post("token/create/", {
                username: result.data.username,
                password: response.password,
            }).then((res) => {
                localStorage.setItem("access", res.data.access);
                localStorage.setItem("refresh", res.data.refresh);
                auth.loggedIn();
                setSign(true);
            });
        });
    };

    React.useEffect(() => {
        if (localStorage.getItem("access")) {
            naviagate("/");
        }
    }, [sign]);

    return (
        <>
            <form onSubmit={handleSubmit(submit)} className={styles.container}>
                <h1>Регистрация</h1>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="username"
                    {...register("username")}
                />
                <label htmlFor="first_name">First name</label>
                <input type="text" id="first_name" {...register("first_name")} />
                <label htmlFor="last_name">Last name</label>
                <input type="text" id="last_name" {...register("last_name")} />
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    {...register("email")}
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
                    {" "}
                    Уже зарегестрированы? <Link to="/auth">Войдите</Link>
                </span>
            </div>
        </>
    );
}

export default Signup;
