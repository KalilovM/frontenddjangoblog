import React from "react";
import Wrapper from "./Wrapper";
import Input from "../inputs/Input";
import SubmitInput from "../inputs/SubmitInput";
import styles from "./Auth.module.scss";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Wrapper>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>LOGIN</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input type="email" title="E-mail" register={register("email")} />
          <Input
            type="password"
            title="Password"
            register={register("username")}
          />
          <SubmitInput />
        </form>
      </div>
    </Wrapper>
  );
}
