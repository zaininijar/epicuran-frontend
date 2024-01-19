import React from "react";
import Head from "next/head";
import { isMobileDevice } from "@/utils/is-mobile";
import type {
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";
import Post from "@/components/pages/post/post";

const PostPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { isMobile } = props;

  return (
    <>
      <Head>
        <title>Post | EPICURAN</title>
      </Head>
      <Post isMobile={isMobile} />
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

export default PostPage;
