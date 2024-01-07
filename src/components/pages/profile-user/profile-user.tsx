import React from "react";
import ProfileUserMobile from "./profile-user-mobile";
import ProfileUserDesktop from "./profile-user-desktop";
import { SidebarInfo, SidebarMenu } from "@/components";
import { HStack } from "@chakra-ui/react";

type ProfileUserProps = {
  isMobile: boolean;
};

const ProfileUser = (props: ProfileUserProps) => {
  const { isMobile } = props;
  return (
    <HStack
      alignItems={`start`}
      justifyContent={`center`}
      mx={`auto`}
      gap={`0`}
    >
      {isMobile ? (
        <>
          <SidebarMenu isMobile={isMobile} />
          <ProfileUserMobile />
          <SidebarInfo isMobile={isMobile} />
        </>
      ) : (
        <>
          <SidebarMenu isMobile={isMobile} />
          <ProfileUserDesktop />
          <SidebarInfo isMobile={isMobile} />
        </>
      )}
    </HStack>
  );
};

export default ProfileUser;
