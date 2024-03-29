import React from "react";
import { SidebarInfo, SidebarMenu } from "@/components";
import { HStack, VStack } from "@chakra-ui/react";
import BerandaMobile from "./beranda-mobile";
import BerandaDesktop from "./beranda-desktop";

type BerandaProps = {
  isMobile: boolean;
};

const Beranda = (props: BerandaProps) => {
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
      <SidebarMenu isMobile={isMobile} menuActive={`home`} />
      <VStack overflow={`scroll`} scrollBehavior={`unset`} maxHeight={`100vh`}>
        <BerandaMobile />
      </VStack>
      <SidebarInfo menu={`home`} isMobile={isMobile} />
    </HStack>
  ) : (
    <HStack
      alignItems={`start`}
      justifyContent={`center`}
      mx={`auto`}
      gap={`0`}
    >
      <SidebarMenu isMobile={isMobile} menuActive="home" />
      <BerandaDesktop />
      <SidebarInfo menu={`home`} isMobile={isMobile} />
    </HStack>
  );
};

export default Beranda;
