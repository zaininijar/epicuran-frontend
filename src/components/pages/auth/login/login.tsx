import React from "react";
import LoginMobile from "./login-mobile";
import LoginDesktop from "./login-dekstop";

type LoginProps = {
  isMobile: boolean;
};

const Login = (props: LoginProps) => {
  const { isMobile } = props;
  return isMobile ? <LoginMobile /> : <LoginDesktop />;
};

export default Login;
