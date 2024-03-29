import React from "react";
import ProfileUserMobile from "./profile-mobile";
import ProfileUserDesktop from "./profile-desktop";
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
      <SidebarMenu menuActive="profile" isMobile={isMobile} />
      <VStack overflow={`scroll`} scrollBehavior={`unset`} maxHeight={`100vh`}>
        <ProfileUserMobile />
      </VStack>
      <SidebarInfo menu={`profile`} isMobile={isMobile} />
    </HStack>
  ) : (
    <HStack
      alignItems={`start`}
      justifyContent={`center`}
      mx={`auto`}
      gap={`0`}
    >
      <SidebarMenu menuActive="profile" isMobile={isMobile} />
      <ProfileUserDesktop />
      <SidebarInfo menu={`profile`} isMobile={isMobile} />
    </HStack>
  );
};

export default ProfileUser;
