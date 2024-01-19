import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { ArrowLeftIcon } from "../icons/default-icons";
import { useRouter } from "next/router";
import InputSearch from "../text-input/input-search";

type HeaderProfileProps = {
  name: string;
};

const HeaderProfile = (props: HeaderProfileProps) => {
  const router = useRouter();

  const { name } = props;

  return (
    <HStack
      position={`fixed`}
      top={`0`}
      zIndex={`99`}
      bg={`rgba(255,255,255, .8)`}
      w={`full`}
    >
      <HStack
        gap={`36px`}
        py={`4px`}
        pl={`16px`}
        w={`598px`}
        backdropFilter={`blur(9px)`}
      >
        <Box cursor={`pointer`} onClick={() => router.back()}>
          <ArrowLeftIcon w={`20px`} h={`20px`} />
        </Box>
        <Box>
          <Text fontSize={`20px`} fontWeight={`bold`}>
            {name}
          </Text>
          <Text fontSize={`13px`} fontWeight={`400`} mt={`3px`}>
            743 Recipe
          </Text>
        </Box>
      </HStack>
      <HStack px={`30px`} bg={`white`}>
        <InputSearch />
      </HStack>
    </HStack>
  );
};

export default HeaderProfile;
