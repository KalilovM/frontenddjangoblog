import Login from "../src/components/auth/Login";
import React from "react";
import Registration from "../src/components/auth/Registration";
import Option from "../src/components/auth/Option";
import Small from "../src/components/layouts/Small";

export default function Auth() {
  const [auth, setAuth] = React.useState(true);
  return (
    <Small>
      {auth ? (
        <>
          <Registration />
          <Option
            text="Already have an account? "
            click={() => setAuth(false)}
            clickText="Login"
          />
        </>
      ) : (
        <>
          <Login />
          <Option
            text="Do not have an account? "
            click={() => setAuth(true)}
            clickText="Register"
          />
        </>
      )}
    </Small>
  );
}
