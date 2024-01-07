import { Stack, Text } from "@chakra-ui/react";
import React from "react";

type ButtonPrimaryProps = {
  title: string;
};

const ButtonPrimary = (props: ButtonPrimaryProps) => {
  const { title } = props;
  return (
    <Stack
      bg={`#FF6C22`}
      color={`white`}
      px={`40px`}
      py={`16px`}
      rounded={`full`}
      fontSize={`17px`}
      fontWeight={`400`}
    >
      <Text>{title}</Text>
    </Stack>
  );
};

export default ButtonPrimary;
