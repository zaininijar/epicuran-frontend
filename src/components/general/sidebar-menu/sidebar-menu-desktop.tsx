import {
  Box,
  HStack,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
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
import PostModal from "../modal/post-modal";
import ProfileButton from "../buttons/profile-button.tsx/profile-button";

type SidebarMenuDesktopProps = {
  user: {
    name: string;
    email: string;
    image: string;
  } | null;
};

const SidebarMenuDesktop = (props: SidebarMenuDesktopProps) => {
  const { user } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const modalProps = {
    isOpen,
    onOpen,
    onClose,
  };

  return (
    <VStack
      width={`263px`}
      height={`100vh`}
      pl={`12px`}
      paddingY={`1.5rem`}
      position={`relative`}
    >
      <VStack
        position={`fixed`}
        width={`251px`}
        minH={`full`}
        pt={`12px`}
        top={`0`}
        borderRight={`1px solid #EFF3F4`}
        pr={`12px`}
        alignItems={`start`}
      >
        <Box position={`relative`} height={`42px`} width={`251px`}>
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
        <VStack
          alignItems={`start`}
          gap={`12px`}
          w={`251px`}
          marginTop={`22px`}
        >
          <HStack
            cursor={`pointer`}
            _hover={{ bg: "primary.50" }}
            rounded={`full`}
            p={`8px`}
            pr={`16px`}
            py={`12px`}
            gap={`20px`}
          >
            <HomeIcon w={`26px`} h={`26px`} />
            {JSON.stringify(user)}
            <Text fontSize={`20px`}>Homess </Text>
          </HStack>
          <HStack
            cursor={`pointer`}
            _hover={{ bg: "primary.50" }}
            rounded={`full`}
            p={`8px`}
            pr={`16px`}
            py={`12px`}
            gap={`20px`}
          >
            <ExploreIcon w={`26px`} h={`26px`} />
            <Text fontSize={`20px`}>Explore</Text>
          </HStack>
          <HStack
            cursor={`pointer`}
            _hover={{ bg: "primary.50" }}
            rounded={`full`}
            p={`8px`}
            pr={`16px`}
            py={`12px`}
            gap={`20px`}
          >
            <NotificationIcon w={`26px`} h={`26px`} />
            <Text fontSize={`20px`}>Notifications</Text>
          </HStack>
          <HStack
            cursor={`pointer`}
            _hover={{ bg: "primary.50" }}
            rounded={`full`}
            p={`8px`}
            pr={`16px`}
            py={`12px`}
            gap={`20px`}
          >
            <SavedIcon w={`26px`} h={`26px`} />
            <Text fontSize={`20px`}>Saved</Text>
          </HStack>
          <HStack
            cursor={`pointer`}
            _hover={{ bg: "primary.50" }}
            rounded={`full`}
            p={`8px`}
            pr={`16px`}
            py={`12px`}
            gap={`20px`}
          >
            <ProfileIcon w={`26px`} h={`26px`} />
            <Text fontSize={`20px`}>Profile</Text>
          </HStack>
          <HStack
            cursor={`pointer`}
            _hover={{ bg: "primary.50" }}
            rounded={`full`}
            p={`8px`}
            pr={`16px`}
            py={`12px`}
            gap={`20px`}
          >
            <MoreIcon w={`26px`} h={`26px`} />
            <Text fontSize={`20px`}>More</Text>
          </HStack>
        </VStack>
        <PostModal {...modalProps}>
          <Stack
            mt={`24px`}
            shadow={`box-shadow: 0px 8px 28px 0px rgba(0, 0, 0, 0.08);`}
          >
            <ButtonPrimary title="Post Recipe" />
          </Stack>
        </PostModal>
        <Stack
          mt={`auto`}
          mb={`22px`}
          ml={`-18px`}
          shadow={`box-shadow: 0px 8px 28px 0px rgba(0, 0, 0, 0.08);`}
        >
          <ProfileButton
            name={user?.name ?? ""}
            email={user?.email ?? ""}
            image={user?.image ?? ""}
          />
        </Stack>
      </VStack>
    </VStack>
  );
};

export default SidebarMenuDesktop;
