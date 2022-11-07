import React, {useEffect, useState} from "react";
import styles from "./Auth.module.scss";
import {useForm} from "react-hook-form";
import axios from "axios";
import {Toast, ToastContainer} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {signIn} from "../../services/auth/Auth";

export default function Auth(props) {
    const [serverError, setServerError] = useState("")
    let [authMode, setAuthMode] = useState("signin")
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const toggleShow = () => setShow(!show)

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }
    const onSubmit = async data => {
        signIn(data, authMode).then(() => {
            navigate("/")
            }
        ).catch((error) => {
            setServerError(error)
            setShow(true)
        })
    }
    useEffect(() => {
        setTimeout(() => {
            setServerError("")
            setShow(false)
        }, 7000)
    }, [serverError])
    if (authMode === "signin") {
        return (<>
            <ToastContainer>
                <Toast show={show} onClose={toggleShow}>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt=""/>
                        <strong className="me-auto">Bootstrap</strong>
                        <small className="text-muted">just now</small>
                    </Toast.Header>
                    <Toast.Body>{serverError}</Toast.Body>
                </Toast>
            </ToastContainer>
            <div className={styles.Auth_form_container}>
                <form className={styles.Auth_form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.Auth_form_content}>
                        <h3 className={styles.Auth_form_title}>Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                              Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Username</label>
                            <input
                                {...register('username')}
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter username"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                {...register('password')}
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </form>
            </div>
        </>)
    }

    return (<div className={styles.Auth_form_container}>
            <form className={styles.Auth_form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.Auth_form_content}>
                    <h3 className={styles.Auth_form_title}>Sign In</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                  Sign In
                </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                            {...register('username')}
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g DeadInside1000-7"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>First name</label>
                        <input
                            {...register('first_name')}
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Marlen"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Last name</label>
                        <input
                            {...register('last_name')}
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Kalilov"
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            {...register('email')}
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            {...register('password')}
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button onSubmit={onSubmit} type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>

    )
    }
