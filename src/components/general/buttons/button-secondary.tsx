import { Stack, Text } from "@chakra-ui/react";
import React from "react";

type ButtonSecondaryProps = {
  title: string;
  variant?: string;
};

const ButtonSecondary = (props: ButtonSecondaryProps) => {
  const { title, variant } = props;
  return (
    <Stack
      bg={variant !== "outline" ? `primary.500` : "white"}
      color={variant !== "outline" ? `white` : "primary.500"}
      border={`1px solid`}
      borderColor={`primary.500`}
      cursor={`pointer`}
      px={`17px`}
      py={`7px`}
      rounded={`full`}
      fontSize={`14px`}
      fontWeight={`400`}
      _hover={
        variant !== "outline" ? { bg: "primary.400" } : { bg: "primary.50" }
      }
    >
      <Text>{title}</Text>
    </Stack>
  );
};

export default ButtonSecondary;
