import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type ButtonProviderSigninProps = {
  onClick: () => void;
  label: string;
  image: string;
};

const ButtonProviderSignin = (props: ButtonProviderSigninProps) => {
  const { onClick, label, image } = props;
  return (
    <Button
      w="full"
      type="button"
      rounded={`24px`}
      py={`24px`}
      color={`gray.500`}
      fontWeight={`normal`}
      borderColor={`secondary.500`}
      _hover={{
        backgroundColor: "secondary.100",
        color: "secondary.500",
      }}
      variant="outline"
      onClick={onClick}
    >
      <Box
        w={`22px`}
        h={`22px`}
        marginRight={`20px`}
        rounded={`full`}
        overflow={`hidden`}
        position={`relative`}
        border={`1px solid `}
        borderColor={`secondary.100`}
      >
        <Image
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          src={image}
          alt={`google-epicuran-sigin`}
        ></Image>
      </Box>
      {label}
    </Button>
  );
};

export default ButtonProviderSignin;
