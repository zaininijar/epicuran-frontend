import React from "react";
import BerandaPage from "./beranda";
import { isMobileDevice } from "@/utils/is-mobile";
import type {
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";

const Index = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { isMobile } = props;

  return <BerandaPage isMobile={isMobile} />;
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const isMobile = isMobileDevice(req.headers["user-agent"]);

  return {
    props: { isMobile },
  };
};

export default Index;
