/** @jsxRuntime classic */
/** @jsx jsx */
import BandiyaLogo from "assets/images/logo_bandiya.png";
import { NavLink } from "components/link";
import { DrawerProvider } from "contexts/drawer/drawer-provider";
import Image from "next/image";
import { useState } from "react";
import Sticky from "react-stickynode";
import {jsx, Container } from "theme-ui";
import menuItems from "./header.data";
import NavbarDrawer from "./navbar-drawer";

export default function Header() {
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false
  });
  const handleStateChange = (status) => {
    status.status === Sticky.STATUS_FIXED ? setState({ ...state, isSticky: true }) : setState({ ...state, isSticky: false });
  };

  return (
    <DrawerProvider>
      <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={100} onStateChange={handleStateChange}>
        <header sx={styles.header} className={state.isSticky ? "is-sticky" : ""}>
          <Container sx={styles.container}>
            {/* <Logo sx={styles.logo} /> */}
          
            <Image src={BandiyaLogo} width={"85%"} height={"50%"} alt="" />
            <nav as="nav" sx={styles.navbar} className={"navbar"} style={{ "margin-left": "17px!important" }}>
              {menuItems.map(({ path, label }, i) => (
                <NavLink key={i} path={path} label={label} />
              ))}
            </nav>
            <NavbarDrawer />
          </Container>
        </header>
      </Sticky>
    </DrawerProvider>
  );
}

const styles = {
  header: {
    backgroundColor: "transparent",
    position: "fixed",
    left: 0,
    right: 0,
    py: [5],
    transition: "all 0.3s ease-in-out 0s",
    "&.is-sticky": {
      backgroundColor: "#000000",
      boxShadow: "0px 20px 50px rgba(59, 90, 136, 0.05)",
      py: [3]
    }
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
    // position: ['relative', null, null, 'static'],
  },
  logo: {
    mr: [null, null, null, null, 30, 12]
  },
  navbar: {
    display: ["none", null, null, null, "flex"],
    alignItems: "center",
    flexGrow: 1,
    // justifyContent: 'center',
    a: {
      cursor: "pointer",
      display: ["flex"],
      fontWeight: 400,
      color: "heading",
      padding: 0,
      transition: "all 0.3s ease-in-out 0s",
      "+ a": {
        ml: 7
      }
    },
    ".active": {
      color: "#BC13FE"
    }
  }
};
