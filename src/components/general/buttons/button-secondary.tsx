import { Stack, Text } from "@chakra-ui/react";
import React from "react";

type ButtonSecondaryProps = {
  title: string;
};

const ButtonSecondary = (props: ButtonSecondaryProps) => {
  const { title } = props;
  return (
    <Stack
      bg={`#FFA800`}
      color={`white`}
      cursor={`pointer`}
      px={`17px`}
      py={`7px`}
      rounded={`full`}
      fontSize={`14px`}
      fontWeight={`400`}
    >
      <Text>{title}</Text>
    </Stack>
  );
};

export default ButtonSecondary;
