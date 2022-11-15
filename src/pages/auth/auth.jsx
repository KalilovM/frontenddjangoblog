import React from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import styles from "./auth.module.scss"
import {Instance} from "../../sevices/axios/axios";

function Auth(props) {
    // todo не позволять нажать на кнопку если поля не заполнены
    const {register, handleSubmit} = useForm()
    const submit = (response) => {
        Instance.post("token/create/", response).then((result) => {
            console.log(result.data)
            localStorage.setItem("access", result.data.access)
            localStorage.setItem("refresh", result.data.refresh)
        })
    }
    return (<>
            <form onSubmit={handleSubmit(submit)} className={styles.container}>
                <h1>Логин</h1>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" autoComplete="username" {...register("username")}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" autoComplete="current-password" {...register("password")}/>
                <input type="submit" className={styles.submit_input}/>
            </form>
            <div className={`${styles.container} ${styles.small_container}`}>
                <span>Еще не зарегестрированы? <Link to="/signup">Регистрация</Link></span>
            </div>
        </>
    );
}

export default Auth;