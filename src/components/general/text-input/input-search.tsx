import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "../icons/default-icons";

type Props = {};

const InputSearch = (props: Props) => {
  return (
    <HStack
      bg={`#FFFBF3`}
      px={`16px`}
      py={`8px`}
      rounded={`full`}
      gap={`2px`}
      w={`316px`}
      alignItems={`center`}
    >
      <SearchIcon w={`24px`} h={`24px`} />
      <Input
        type="search"
        placeholder="Phone number"
        border={`0`}
        _placeholder={{ color: "#536471" }}
        _focus={{ outline: "none", ring: "none" }}
      />
    </HStack>
  );
};

export default InputSearch;
