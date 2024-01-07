import React from "react";
import FooterDesktop from "./footer-desktop";
import FooterMobile from "./footer-mobile";
import JoinMobile from "./join-mobile";
import JoinDesktop from "./join-desktop";

type FooterProps = {
  isMobile: boolean;
};

const Footer = (props: FooterProps) => {
  const { isMobile } = props;
  return (
    <>
      {isMobile ? (
        <>
          <JoinMobile />
          <FooterMobile />
        </>
      ) : (
        <>
          <JoinDesktop />
          <FooterDesktop />
        </>
      )}
    </>
  );
};

export default Footer;
