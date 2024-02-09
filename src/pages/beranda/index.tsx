import React, { useEffect } from "react";
import Head from "next/head";
import Beranda from "@/components/pages/beranda";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
type BerandaProps = {
  isMobile: boolean;
};

const BerandaPage = (props: BerandaProps) => {
  const { isMobile } = props;

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
      return;
    }
  }, [router, status]);

  console.log(`data: ${JSON.stringify(session)}`);
  console.log(`status: ${JSON.stringify(status)}`);

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
