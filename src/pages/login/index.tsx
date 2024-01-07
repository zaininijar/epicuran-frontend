import React from "react";
import Head from "next/head";
import { Login } from "@/components";

type LoginProps = {
  isMobile: boolean;
};

const LoginPage = (props: LoginProps) => {
  const { isMobile } = props;
  return (
    <>
      <Head>
        <title>Login | EPICURAN</title>
      </Head>
      <Login isMobile={isMobile} />
    </>
  );
};

export default LoginPage;
