import { Box, HStack, Textarea, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { ProfilePicture } from "../images";
import { ImageIcon } from "../icons/default-icons";
import ButtonPrimary from "../buttons/button-primary";

type PostRecipeAreaProps = {};

const PostRecipeArea = (props: PostRecipeAreaProps) => {
  function autoGrow(e: HTMLTextAreaElement) {
    e.style.height = "5px";
    e.style.height = e.scrollHeight + "px";
  }

  return (
    <HStack
      gap={`12px`}
      alignItems={`start`}
      p={`16px`}
      borderTop={`1px solid #EFF3F4`}
      borderBottom={`1px solid #EFF3F4`}
      w={`full`}
    >
      <Box
        w={`48px`}
        aspectRatio={`1/1`}
        position={`relative`}
        rounded={`full`}
        overflow={`hidden`}
      >
        <Image
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={ProfilePicture}
          fill
          alt="Profile Cover Images | Epicuran"
        ></Image>
      </Box>
      <VStack w={`full`} alignItems={`start`} gap={`8px`}>
        <Textarea
          onChange={(e) => {
            autoGrow(e.target);
          }}
          w={`full`}
          border={`none`}
          rows={1}
          height={`auto`}
          fontSize={`18px`}
          outline={`none`}
          px={0}
          ring={`none`}
          _focus={{
            outline: `none`,
            ring: `none`,
            borderBottom: `1px solid #FF6C22`,
          }}
          rounded={`none`}
          placeholder="Post Your Recipe Now"
          borderBottom={`1px solid #EFF3F4`}
        ></Textarea>
        <HStack justifyContent={`space-between`} w={`full`} pt={`8px`}>
          <HStack>
            <ImageIcon color={`primary`} cursor={`pointer`} />
            <ImageIcon color={`primary`} cursor={`pointer`} />
            <ImageIcon color={`primary`} cursor={`pointer`} />
          </HStack>
          <ButtonPrimary title="Post Now" size="sm" />
        </HStack>
      </VStack>
    </HStack>
  );
};

export default PostRecipeArea;
