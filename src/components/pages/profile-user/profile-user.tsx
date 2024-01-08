import React from "react";
import ProfileUserMobile from "./profile-user-mobile";
import ProfileUserDesktop from "./profile-user-desktop";
import { SidebarInfo, SidebarMenu } from "@/components";
import { HStack, VStack } from "@chakra-ui/react";

type ProfileUserProps = {
  isMobile: boolean;
};

const ProfileUser = (props: ProfileUserProps) => {
  const { isMobile } = props;
  return isMobile ? (
    <HStack
      alignItems={`start`}
      justifyContent={`center`}
      mx={`auto`}
      gap={`0`}
      overflow={`hidden`}
      height={`100vh`}
    >
      <SidebarMenu isMobile={isMobile} />
      <VStack overflow={`scroll`} scrollBehavior={`unset`} maxHeight={`100vh`}>
        <ProfileUserMobile />
      </VStack>
      <SidebarInfo isMobile={isMobile} />
    </HStack>
  ) : (
    <HStack
      alignItems={`start`}
      justifyContent={`center`}
      mx={`auto`}
      gap={`0`}
    >
      <SidebarMenu isMobile={isMobile} />
      <ProfileUserDesktop />
      <SidebarInfo isMobile={isMobile} />
    </HStack>
  );
};

export default ProfileUser;
