import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { PinnedIcon } from "../icons/default-icons";

type Props = {};

const Pinned = (props: Props) => {
  return (
    <HStack w={`full`} px={`13px`}>
      <PinnedIcon w={`16px`} h={`16px`} />
      <Text color={`#536471`} fontWeight={`bold`} fontSize={`13px`}>
        Pinned Recipe
      </Text>
    </HStack>
  );
};

export default Pinned;
