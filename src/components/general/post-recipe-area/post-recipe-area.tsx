import { Box, HStack, Textarea, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { ImageIcon } from "../icons/default-icons";
import ButtonPrimary from "../buttons/button-primary";
import { useSession } from "next-auth/react";

type PostRecipeAreaProps = {};

const PostRecipeArea = (props: PostRecipeAreaProps) => {
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(false);

  function autoGrow(e: HTMLTextAreaElement) {
    e.style.height = "5px";
    e.style.height = e.scrollHeight + "px";
  }

  const { data: session } = useSession();

  const handlePost = (e: HTMLTextAreaElement) => {
    if (e.value.length > 4) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  };

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
          src={session?.user?.image ?? ""}
          fill
          alt="Profile Cover Images | Epicuran"
        ></Image>
      </Box>
      <VStack w={`full`} alignItems={`start`} gap={`8px`}>
        <Textarea
          onChange={(e) => {
            autoGrow(e.target);
            handlePost(e.target);
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
          <ButtonPrimary
            isDisabled={isButtonDisabled}
            title="Post Now"
            size="sm"
          />
        </HStack>
      </VStack>
    </HStack>
  );
};

export default PostRecipeArea;
