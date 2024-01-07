import { ArrowLeftIcon, CoverImage, ProfilePicture } from "@/components";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ButtonSecondary from "../../general/buttons/button-secondary";

type Props = {};

const ProfileUserDesktop = (props: Props) => {
  const router = useRouter();

  return (
    <VStack alignItems={`start`} gap={0}>
      <HStack gap={`36px`} py={`14px`} px={`16px`}>
        <Box cursor={`pointer`} onClick={() => router.back()}>
          <ArrowLeftIcon w={`20px`} h={`20px`} />
        </Box>
        <Box>
          <Text fontSize={`20px`} fontWeight={`bold`}>
            Juna Rorimpandey
          </Text>
          <Text fontSize={`13px`} fontWeight={`400`} mt={`3px`}>
            743 Recipe
          </Text>
        </Box>
      </HStack>
      <Box position={`relative`} w={`598px`} height={`199px`}>
        <Image
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={CoverImage}
          fill
          alt="Profile Cover Images | Epicuran"
        ></Image>
      </Box>
      <HStack
        p={`16px`}
        justifyContent={`end`}
        w={`100%`}
        alignItems={`center`}
        position={`relative`}
      >
        <Box
          w={`142px`}
          aspectRatio={`1/1`}
          position={`absolute`}
          rounded={`full`}
          overflow={`hidden`}
          top={`-75px`}
          left={`16px`}
        >
          <Image
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={ProfilePicture}
            fill
            alt="Profile Cover Images | Epicuran"
          ></Image>
        </Box>
        <ButtonSecondary title="Follow" />
      </HStack>
    </VStack>
  );
};

export default ProfileUserDesktop;
