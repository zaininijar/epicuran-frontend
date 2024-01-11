import React from "react";
import Head from "next/head";
import { isMobileDevice } from "@/utils/is-mobile";
import type {
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";
import { Login } from "@/components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { isMobile } = props;
  const { data: session } = useSession();
  const route = useRouter();

  if (session) {
    route.push("/");
  }

  return (
    <>
      <Head>
        <title>Sign In | EPICURAN</title>
      </Head>
      <Login isMobile={isMobile} />
    </>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const isMobile = isMobileDevice(req.headers["user-agent"]);

  return {
    props: { isMobile },
  };
};

export default LoginPage;
