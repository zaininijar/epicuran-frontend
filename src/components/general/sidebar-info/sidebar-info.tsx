import React from "react";
import SidebarInfoMobile from "./sidebar-info-mobile";
import SidebarInfoDesktop from "./sidebar-info-desktop";

type Props = {
  isMobile: boolean;
  menu: string;
};

const SidebarInfo = (props: Props) => {
  const { isMobile, menu } = props;
  return isMobile ? <SidebarInfoMobile /> : <SidebarInfoDesktop menu={menu} />;
};

export default SidebarInfo;
