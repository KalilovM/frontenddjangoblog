import React from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import styles from "./auth.module.scss"

function Signup(props) {
    const {register, handleSubmit} = useForm()
    const submit = (res) => {
        console.log(res)
    }
    return (<>
                <form
                    onSubmit={handleSubmit(submit)}
                    className={styles.container}
                >
                    <h1>Регистрация</h1>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        autoComplete="username" {...register("username")}/>
                    <label htmlFor="first_name">First name</label>
                    <input
                        type="text"
                        id="first_name" {...register("first_name")}/>
                    <label htmlFor="last_name">Last name</label>
                    <input
                        type="text"
                        id="last_name" {...register("last_name")}/>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        autoComplete="email" {...register("email")}/>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        autoComplete="current-password" {...register("password")}/>
                    <input type="submit" className={styles.submit_input}/>
                </form>
            <div className={`${styles.container} ${styles.small_container}`}>
                <span> Уже зарегестрированы? <Link to="/auth">Войдите</Link></span>
            </div>
        </>
    );
}

export default Signup;