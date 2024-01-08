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

type Props = {};

const SidebarMenuDesktop = (props: Props) => {
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
          gap={`24px`}
          w={`251px`}
          marginTop={`22px`}
        >
          <HStack
            cursor={`pointer`}
            _hover={{ bg: "primary.100" }}
            rounded={`full`}
            p={`8px`}
            gap={`20px`}
          >
            <HomeIcon w={`26px`} h={`26px`} />
            <Text fontSize={`20px`}>Home</Text>
          </HStack>
          <HStack
            cursor={`pointer`}
            _hover={{ bg: "primary.100" }}
            rounded={`full`}
            p={`8px`}
            gap={`20px`}
          >
            <ExploreIcon w={`26px`} h={`26px`} />
            <Text fontSize={`20px`}>Explore</Text>
          </HStack>
          <HStack
            cursor={`pointer`}
            _hover={{ bg: "primary.100" }}
            rounded={`full`}
            p={`8px`}
            gap={`20px`}
          >
            <NotificationIcon w={`26px`} h={`26px`} />
            <Text fontSize={`20px`}>Notifications</Text>
          </HStack>
          <HStack
            cursor={`pointer`}
            _hover={{ bg: "primary.100" }}
            rounded={`full`}
            p={`8px`}
            gap={`20px`}
          >
            <SavedIcon w={`26px`} h={`26px`} />
            <Text fontSize={`20px`}>Saved</Text>
          </HStack>
          <HStack
            cursor={`pointer`}
            _hover={{ bg: "primary.100" }}
            rounded={`full`}
            p={`8px`}
            gap={`20px`}
          >
            <ProfileIcon w={`26px`} h={`26px`} />
            <Text fontSize={`20px`}>Profile</Text>
          </HStack>
          <HStack
            cursor={`pointer`}
            _hover={{ bg: "primary.100" }}
            rounded={`full`}
            p={`8px`}
            gap={`20px`}
          >
            <MoreIcon w={`26px`} h={`26px`} />
            <Text fontSize={`20px`}>More</Text>
          </HStack>
        </VStack>
        <PostModal {...modalProps}>
          <Stack
            mt={`38px`}
            shadow={`box-shadow: 0px 8px 28px 0px rgba(0, 0, 0, 0.08);`}
          >
            <ButtonPrimary title="Post Recipe" />
          </Stack>
        </PostModal>
      </VStack>
    </VStack>
  );
};

export default SidebarMenuDesktop;
