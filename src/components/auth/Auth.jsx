import styles from "./Auth.module.scss";
import classNames from "classnames";
import Link from "next/link";
import AuthWrapper from "../layouts/authWrapper/AuthWrapper";
const Auth = () => {
  return (
    <AuthWrapper>
      <div className={styles.auth}>
        <div className={styles.auth__title}>Registration</div>
        <form className={styles.auth__form}>
          <fieldset className={styles.form__fields}>
            <div className={styles.form__field}>
              <label htmlFor="email_field" className={styles.form__field_label}>
                E-mail
              </label>
              <input
                type="email"
                id="email_field"
                className={styles.form__field_input}
              />
            </div>
            <div className={styles.form__field}>
              <label
                htmlFor="nickname_filed"
                className={styles.form__field_label}
              >
                Nickname
              </label>
              <input
                type="text"
                id="nickname_filed"
                className={styles.form__field_input}
              />
            </div>
            <div className={styles.form__field}>
              <label
                htmlFor="password_filed"
                className={styles.form__field_label}
              >
                Password
              </label>
              <input
                type="text"
                id="password_filed"
                className={styles.form__field_input}
              />
            </div>
            <div className={styles.form__field}>
              <label
                htmlFor="password_confirm_filed"
                className={styles.form__field_label}
              >
                Password confirm
              </label>
              <input
                type="text"
                id="password_confirm_filed"
                className={styles.form__field_input}
              />
            </div>
            <div className={styles.form__buttons}>
              <button type="submit">Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className={classNames(styles.auth__additional, styles.auth)}>
        <span className={styles.auth__additional_message}>
          {"Already have an account? "}
          <Link href="#" className={styles.auth__additional_link}>
            Login
          </Link>
        </span>
      </div>
      <div></div>
    </AuthWrapper>
  );
};

export default Auth;
