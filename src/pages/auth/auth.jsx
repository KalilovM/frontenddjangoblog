import React from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import styles from "./auth.module.scss"

function Auth(props) {
    const {register, handleSubmit} = useForm()
    const submit = (res) => {
        console.log(res)
    }
    return (<>
            <form onSubmit={handleSubmit(submit)} className={styles.container}>
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