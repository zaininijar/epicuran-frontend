import { PostCard, HeaderBeranda } from "@/components";
import { VStack } from "@chakra-ui/react";
import React from "react";
import PostRecipeArea from "../../general/post-recipe-area/post-recipe-area";
import { RecipePostList } from "./data";

type Props = {};

const BerandaDesktop = (props: Props) => {
  return (
    <VStack
      alignItems={`start`}
      gap={0}
      maxW={`598px`}
      position={`relative`}
      mt={`56px`}
      borderRight={`1px solid #EFF3F4`}
    >
      <HeaderBeranda activeMenu="for-you" />
      <PostRecipeArea />
      {RecipePostList.map((post, key) => (
        <PostCard key={key} data={post} />
      ))}
    </VStack>
  );
};

export default BerandaDesktop;
