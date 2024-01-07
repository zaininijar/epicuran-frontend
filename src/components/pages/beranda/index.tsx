import BerandaDesktop from "./beranda-desktop";
import BerandaMobile from "./beranda-mobile";
import Navbar from "../../general/navbar/navbar";
import Footer from "../../general/footer/footer";

type BerandaProps = {
  isMobile: boolean;
};

const Beranda = (props: BerandaProps) => {
  const { isMobile } = props;

  return (
    <>
      <Navbar isMobile={isMobile} />
      {isMobile ? <BerandaMobile /> : <BerandaDesktop />}
      <Footer isMobile={isMobile} />
    </>
  );
};

export default Beranda;
