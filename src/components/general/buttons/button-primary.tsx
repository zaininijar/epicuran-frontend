import { Stack, Text } from "@chakra-ui/react";
import React from "react";

type ButtonPrimaryProps = {
  title: string;
  size?: string;
  isDisabled?: boolean;
};

const ButtonPrimary = (props: ButtonPrimaryProps) => {
  const { title, size, isDisabled } = props;
  return size == "sm" ? (
    <Stack
      bg={isDisabled ? `#FF6C22` : `#FF6C2283`}
      color={`white`}
      px={`17px`}
      py={`7px`}
      rounded={`full`}
      fontSize={`14px`}
      fontWeight={`400`}
      cursor={`pointer`}
    >
      <Text>{title}</Text>
    </Stack>
  ) : (
    <Stack
      bg={`#FF6C22`}
      color={`white`}
      px={`40px`}
      py={`16px`}
      rounded={`full`}
      fontSize={`14px`}
      fontWeight={`bold`}
      cursor={`pointer`}
    >
      <Text>{title}</Text>
    </Stack>
  );
};

export default ButtonPrimary;
