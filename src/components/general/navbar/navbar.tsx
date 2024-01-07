import React from "react";
import NavbarMobile from "./navbar-mobile";
import NavbarDesktop from "./navbar-desktop";

type Props = {
  isMobile: boolean;
};

const Navbar = (props: Props) => {
  const { isMobile } = props;

  return isMobile ? <NavbarMobile /> : <NavbarDesktop />;
};

export default Navbar;
