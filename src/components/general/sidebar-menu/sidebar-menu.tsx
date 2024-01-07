import React from "react";
import SidebarMenuMobile from "./sidebar-menu-mobile";
import SidebarMenuDesktop from "./sidebar-menu-desktop";

type Props = {
  isMobile: boolean;
};

const SidebarMenu = (props: Props) => {
  const { isMobile } = props;
  return isMobile ? <SidebarMenuMobile /> : <SidebarMenuDesktop />;
};

export default SidebarMenu;
