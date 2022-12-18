import styles from "./Auth.module.scss";
import React from "react";
import classNames from "classnames";
import Link from "next/link";
import AuthWrapper from "../layouts/authWrapper/AuthWrapper";
import { useForm } from "react-hook-form";
import { Instance } from "../../services/axios/axios";

export default function AuthLogin() {
	// Hook forms
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// Error stores
	const [errorPassword, setErrorPassword] = React.useState();
	const [errorUsername, setErrorUsername] = React.useState();

	// Submit handler
	const onSubmit = (data) => {
		Instance.post("/auth/login/", data)
			.then((res) => {
				localStorage.setItem("access", res.data.access);
				localStorage.setItem("refresh", res.data.refresh);
				window.location.href = "/";
			})
			.catch((err) => {
				setErrorPassword("invalid credentials");
				setErrorUsername("invalid credentials");
			});
	};
	return (
		<AuthWrapper>
			<div className={styles.auth}>
				<div className={styles.auth__title}>Registration</div>
				<form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)}>
					<fieldset className={styles.form__fields}>
						<div className={styles.form__field}>
							<label htmlFor="username_field" className={styles.form__field_label}>
								Username
							</label>
							<input type="text" id="username_field" className={styles.form__field_input} {...register("username", { required: true })} />
							{errorUsername && <p className={styles.form__field_error}>{errorUsername}</p>}
						</div>
						<div className={styles.form__field}>
							<label htmlFor="password_field" className={styles.form__field_label}>
								Password
							</label>
							<input
								type="password"
								id="password_field"
								className={styles.form__field_input}
								{...register("password", { required: true })}
							/>
							{errorPassword && <p className={styles.form__field_error}>{errorPassword}</p>}
						</div>
						<div className={styles.form__buttons}>
							<button type="submit">Submit</button>
						</div>
					</fieldset>
				</form>
			</div>
			<div className={classNames(styles.auth__additional, styles.auth)}>
				<span className={styles.auth__additional_message}>
					{"Not registered yet? "}
					<Link href="login" className={styles.auth__additional_link}>
						Register
					</Link>
				</span>
			</div>
		</AuthWrapper>
	);
}
