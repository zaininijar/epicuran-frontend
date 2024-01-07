import React from "react";
import Head from "next/head";
import Beranda from "@/components/pages/beranda";

type BerandaProps = {
  isMobile: boolean;
};

const BerandaPage = (props: BerandaProps) => {
  const { isMobile } = props;
  return (
    <>
      <Head>
        <title>Beranda | EPICURAN</title>
      </Head>
      <Beranda isMobile={isMobile} />
    </>
  );
};

export default BerandaPage;
