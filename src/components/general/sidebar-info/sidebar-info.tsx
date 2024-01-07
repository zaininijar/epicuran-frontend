import React from "react";
import SidebarInfoMobile from "./sidebar-info-mobile";
import SidebarInfoDesktop from "./sidebar-info-desktop";

type Props = {
  isMobile: boolean;
};

const SidebarInfo = (props: Props) => {
  const { isMobile } = props;
  return isMobile ? <SidebarInfoMobile /> : <SidebarInfoDesktop />;
};

export default SidebarInfo;
