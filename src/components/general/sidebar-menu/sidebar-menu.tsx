import React from "react";
import SidebarMenuMobile from "./sidebar-menu-mobile";
import SidebarMenuDesktop from "./sidebar-menu-desktop";
import { useSession } from "next-auth/react";

type Props = {
  isMobile: boolean;
};

const SidebarMenu = (props: Props) => {
  const { data: session } = useSession();

  const { isMobile } = props;

  const newSidebarProps = {
    user:
      {
        name: session?.user?.name ?? "",
        email: session?.user?.email ?? "",
        image: session?.user?.image ?? "",
      } ?? null,
  };

  return isMobile ? (
    <SidebarMenuMobile />
  ) : (
    <SidebarMenuDesktop {...newSidebarProps} />
  );
};

export default SidebarMenu;
