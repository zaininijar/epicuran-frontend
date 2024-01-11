import React from "react";
import RegisterMobile from "./register-mobile";
import RegisterDesktop from "./register-dekstop";

type RegisterProps = {
  isMobile: boolean;
};

const Register = (props: RegisterProps) => {
  const { isMobile } = props;
  return isMobile ? <RegisterMobile /> : <RegisterDesktop />;
};

export default Register;
