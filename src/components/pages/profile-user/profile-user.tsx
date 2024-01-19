import React from "react";
import ProfileUserMobile from "./profile-user-mobile";
import ProfileUserDesktop from "./profile-user-desktop";
import { SidebarInfo, SidebarMenu } from "@/components";
import { HStack, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ProfileListData } from "@/components/general/sidebar-info/data";

type ProfileUserProps = {
  isMobile: boolean;
};

const ProfileUser = (props: ProfileUserProps) => {
  const { isMobile } = props;

  const router = useRouter();
  const username = router.query.username;
  const userDetail = ProfileListData.find((user) => user.username === username);

  return isMobile ? (
    <HStack
      alignItems={`start`}
      justifyContent={`center`}
      mx={`auto`}
      gap={`0`}
      overflow={`hidden`}
      height={`100vh`}
    >
      <SidebarMenu menuActive={`profile-user`} isMobile={isMobile} />
      <VStack overflow={`scroll`} scrollBehavior={`unset`} maxHeight={`100vh`}>
        <ProfileUserMobile />
      </VStack>
      <SidebarInfo menu={`profile-user`} isMobile={isMobile} />
    </HStack>
  ) : (
    <HStack
      alignItems={`start`}
      justifyContent={`center`}
      mx={`auto`}
      gap={`0`}
    >
      <SidebarMenu menuActive={`profile-user`} isMobile={isMobile} />
      <ProfileUserDesktop data={userDetail} />
      <SidebarInfo menu={`profile-user`} isMobile={isMobile} />
    </HStack>
  );
};

export default ProfileUser;
