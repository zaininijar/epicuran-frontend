import React from "react";
import RegisterMobile from "./register-mobile";
import RegisterDesktop from "./register-dekstop";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

type RegisterProps = {
  isMobile: boolean;
};

const Register = (props: RegisterProps) => {
  const { isMobile } = props;

  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/");
  }
  return isMobile ? <RegisterMobile /> : <RegisterDesktop />;
};

export default Register;
