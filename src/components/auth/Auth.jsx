import styles from "./Auth.module.scss";
import React from "react";
import classNames from "classnames";
import Link from "next/link";
import AuthWrapper from "../layouts/authWrapper/AuthWrapper";
import { useForm} from "react-hook-form";
import { Instance } from "../../services/axios/axios";


const Auth = () => {
  // Hook forms
  const { register, handleSubmit, formState:{errors} } = useForm();

  // Value stores
  const [confirmPassword, setConfirmPassword] = React.useState("");
  // Error stores
  const [errorPassword, setErrorPassword] = React.useState();
  const [errorEmail, setErrorEmail] = React.useState();
  const [errorUsername, setErrorUsername] = React.useState();

  // Submit handler
  const onSubmit = (data) => {
    if (data.password !== confirmPassword) {
      setErrorPassword("passwords do not match");
      return;
    }
    Instance.post("/auth/register/", data).then((res) => {
      const payload = {username: data.username, password: data.password}
      Instance.post("/auth/login/", payload).then((res) => {
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("refresh", res.data.refresh);
        window.location.href = "/";
      }).catch((err) => {
        console.log(err)
        console.log("Not normal", err.response.data)
        })
        ;
    }).catch((err) => {
      console.log("Not normal", err.response.data)
      setErrorPassword(err.response.data?.password)
      setErrorEmail(err.response.data?.email)
      setErrorUsername(err.response.data?.username)
      });
  };

  return (
    <AuthWrapper>
      <div className={styles.auth}>
        <div className={styles.auth__title}>Registration</div>
        <form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)}>
          <fieldset className={styles.form__fields}>
            <div className={styles.form__field}>
              <label htmlFor="email_field" className={styles.form__field_label}>
                E-mail
              </label>
              <input
                type="email"
                id="email_field"
                className={styles.form__field_input}
                {...register("email", { required: true })}
              />
              {errorEmail && <p className={styles.form__field_error}>{errorEmail}</p>}

            </div>
            <div className={styles.form__field}>
              <label
                htmlFor="username_field"
                className={styles.form__field_label}
              >
                username
              </label>
              <input
                type="text"
                id="username_field"
                className={styles.form__field_input}
                {...register("username", { required: true })}
              />
              {errorUsername&& <p className={styles.form__field_error}>{errorUsername}</p>}
            </div>
            <div className={styles.form__field}>
              <label
                htmlFor="password_filed"
                className={styles.form__field_label}
              >
                password
              </label>
              <input
                type="password"
                id="password_filed"
                className={styles.form__field_input}
                {...register("password", { required: true })}
              />
              {errorPassword&& <p className={styles.form__field_error}>{errorPassword}</p>}
            </div>
            <div className={styles.form__field}>
              <label
                htmlFor="password_confirm_filed"
                className={styles.form__field_label}
              >
                password confirm
              </label>
              <input
                type="password"
                id="password_confirm_filed"
                className={styles.form__field_input}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className={styles.form__buttons}>
              <button type="submit">submit</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className={classNames(styles.auth__additional, styles.auth)}>
        <span className={styles.auth__additional_message}>
          {"already have an account? "}
          <Link href="login" className={styles.auth__additional_link}>
            login
          </Link>
        </span>
      </div>
    </AuthWrapper>
  );
};

export default Auth;
