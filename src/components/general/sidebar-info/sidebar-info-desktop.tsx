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
import { Logo, ProfilePicture } from "../images";
import InputSearch from "../text-input/input-search";
import ProfileList from "../profile-list/profile-list";
import { ProfileListData } from "./data";
import Link from "next/link";

type Props = {};

const SidebarInfoDesktop = (props: Props) => {
  return (
    <VStack
      borderLeft={`1px solid #EFF3F4`}
      height={`100vh`}
      paddingY={`1.5rem`}
      px={`32px`}
    >
      <InputSearch />
      <VStack
        alignItems={`start`}
        gap={`25px`}
        w={`165px`}
        marginTop={`22px`}
        bg={`#FFFBF3`}
        border={`1px solid #FFFBF3`}
        width={`full`}
        px={`16px`}
        py={`13px`}
        rounded={`16px`}
      >
        <Text fontSize={`20px`} fontWeight={`bold`}>
          You might like
        </Text>

        {ProfileListData.map((profileList, key) => (
          <ProfileList key={key} data={profileList} />
        ))}

        <HStack alignSelf={`start`}>
          <Link href={``}>
            <Text color={`#FFA800`} fontSize={`15px`} fontWeight={`normal`}>
              Show More
            </Text>
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default SidebarInfoDesktop;
