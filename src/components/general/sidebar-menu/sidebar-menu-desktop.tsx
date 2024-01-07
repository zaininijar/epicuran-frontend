import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import {
  ExploreIcon,
  HomeIcon,
  MoreIcon,
  NotificationIcon,
  ProfileIcon,
  SavedIcon,
} from "../icons/default-icons";
import Image from "next/image";
import ButtonPrimary from "../buttons/button-primary";
import { Logo } from "../images";

type Props = {};

const SidebarMenuDesktop = (props: Props) => {
  return (
    <VStack
      borderRight={`1px solid #EFF3F4`}
      width={`300px`}
      height={`100vh`}
      paddingY={`1.5rem`}
    >
      <Box position={`relative`} height={`42px`} width={`181px`}>
        <Image
          width={181}
          height={42}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={Logo}
          alt="Epicuran Logo"
        />
      </Box>
      <VStack alignItems={`start`} gap={`32px`} w={`165px`} marginTop={`22px`}>
        <HStack gap={`20px`}>
          <HomeIcon />
          <Text fontSize={`20px`}>Home</Text>
        </HStack>
        <HStack gap={`20px`}>
          <ExploreIcon />
          <Text fontSize={`20px`}>Explore</Text>
        </HStack>
        <HStack gap={`20px`}>
          <NotificationIcon />
          <Text fontSize={`20px`}>Notifications</Text>
        </HStack>
        <HStack gap={`20px`}>
          <SavedIcon />
          <Text fontSize={`20px`}>Saved</Text>
        </HStack>
        <HStack gap={`20px`}>
          <ProfileIcon />
          <Text fontSize={`20px`}>Profile</Text>
        </HStack>
        <HStack gap={`20px`}>
          <MoreIcon />
          <Text fontSize={`20px`}>More</Text>
        </HStack>
      </VStack>
      <Stack
        mt={`38px`}
        shadow={`box-shadow: 0px 8px 28px 0px rgba(0, 0, 0, 0.08);`}
      >
        <ButtonPrimary title="Post Recipe" />
      </Stack>
    </VStack>
  );
};

export default SidebarMenuDesktop;
