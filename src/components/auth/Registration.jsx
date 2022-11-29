import React from "react";
import Wrapper from "./Wrapper";
import styles from "./Auth.module.scss";
import { useForm } from "react-hook-form";
import Input from "../inputs/Input";
import SubmitInput from "../inputs/SubmitInput";
import { InstanceApi } from "../../auth/axios";

export default function Registration() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    InstanceApi.post(data).then((res) => {
      cosnole.log(res);
    });
  };
  return (
    <Wrapper>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>REGISTRATION</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input type="email" title="E-mail" register={register("email")} />
          <Input
            type="nickname"
            title="Nickname"
            register={register("username")}
          />
          <Input
            type="password"
            title="Password"
            register={register("username")}
          />
          <Input type="password" title="Confirm password" />
          <SubmitInput />
        </form>
      </div>
    </Wrapper>
  );
}
