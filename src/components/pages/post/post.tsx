import React from "react";
import PostMobile from "./post-mobile";
import PostDesktop from "./post-desktop";
import { HStack, VStack } from "@chakra-ui/react";
import { SidebarInfo, SidebarMenu } from "@/components/general";
import { RecipePostList, RecipePostListType } from "../beranda/data";
import { useRouter } from "next/router";

type PostProps = {
  isMobile: boolean;
};

const Post = (props: PostProps) => {
  const { isMobile } = props;

  const router = useRouter();

  const postId = router.query.id;
  const dataPost: RecipePostListType | undefined = RecipePostList.find(
    (post) => post.id === postId
  );

  return isMobile ? (
    <HStack
      alignItems={`start`}
      justifyContent={`center`}
      gap={`0`}
      overflow={`hidden`}
      height={`100vh`}
    >
      <SidebarMenu isMobile={isMobile} menuActive="" />
      <VStack overflow={`scroll`} scrollBehavior={`unset`} maxHeight={`100vh`}>
        <PostMobile />
      </VStack>
      <SidebarInfo menu={`post`} isMobile={isMobile} />
    </HStack>
  ) : (
    <HStack
      alignItems={`start`}
      justifyContent={`center`}
      mx={`auto`}
      gap={`0`}
    >
      <SidebarMenu isMobile={isMobile} menuActive="" />
      <PostDesktop data={dataPost} />
      <SidebarInfo menu={`post`} isMobile={isMobile} />
    </HStack>
  );
};

export default Post;
