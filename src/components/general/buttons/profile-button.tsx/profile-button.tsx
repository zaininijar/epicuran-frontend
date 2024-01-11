import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SignOutIcon } from "../../icons/default-icons";

type ProfileButtonProps = {
  name: string;
  email: string;
  image: string;
};

const ProfileButton = (props: ProfileButtonProps) => {
  const { name, email, image } = props;

  const session = useSession();

  const router = useRouter();

  if (!session) {
    router.push("/auth/login");
  }

  return (
    <HStack
      _hover={{ backgroundColor: "primary.50" }}
      cursor={`pointer`}
      p={`8px`}
      rounded={`full`}
    >
      <Box
        w={`40px`}
        h={`40px`}
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
          alt={`${name}-epicuran`}
        ></Image>
      </Box>
      <VStack alignItems={`start`} gap={`0`}>
        <Text fontSize={`15px`} fontWeight={`bold`}>
          {name}
        </Text>
        <Text fontSize={`11px`} color={`gray.500`}>
          {email}
        </Text>
      </VStack>
      <Link style={{ marginLeft: "4px" }} href={`/api/auth/signout`}>
        <Stack
          p={`10px`}
          w={`40px`}
          h={`40px`}
          _hover={{ bgColor: "primary.100" }}
          rounded={`full`}
          alignItems={`center`}
          gap={0}
          justifyContent={`center`}
        >
          <SignOutIcon w={`20px`} h={`20px`} color={`gray.400`} />
        </Stack>
      </Link>
    </HStack>
  );
};

export default ProfileButton;
