import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";
import React from "react";
import ButtonSecondary from "../buttons/button-secondary";

type ProfileListProps = {
  data: {
    name: string;
    username: string;
    picture_path: string;
  };
};

const ProfileList = (props: ProfileListProps) => {
  const { name, username, picture_path } = props.data;

  return (
    <HStack
      gap={`12px`}
      alignItems={`center`}
      justifyContent={`space-between`}
      w={`full`}
    >
      <HStack>
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
            src={picture_path}
            fill
            alt="Profile Cover Images | Epicuran"
          ></Image>
        </Box>
        <Box fontSize={`15px`}>
          <Text fontWeight={`bold`} color={`#0F1419`}>
            {name}
          </Text>
          <Text color={`#536471`} fontWeight={`400`}>
            {username}
          </Text>
        </Box>
      </HStack>
      <ButtonSecondary title="Follow" />
    </HStack>
  );
};

export default ProfileList;
