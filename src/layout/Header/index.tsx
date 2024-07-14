import { useContext, useState } from "react";

// @mui
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  Typography,
  Link,
} from "@mui/material";
import {
  Menu as MenuIcon,
} from "@mui/icons-material";
// import app
import { ColorModeContext, getColors } from "../Theme/themes";
import { motion } from "framer-motion";
// const NAV_WIDTH = 280;
import "./style.css"
import Image from "next/image";

interface HeaderProps {
  isNonMobile: boolean;
  setIsSidebarOpen: () => void;
  APP_BAR: string
}

const Header: React.FC<HeaderProps> = ({isNonMobile, setIsSidebarOpen, APP_BAR }) => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme()
  const [isOn, setIsOn] = useState(false);
  if (!colorMode) {
    // Handle the case where colorMode is undefined (e.g., context not yet initialized)
    return null; // or render a loading state or default content
  }
  const toggleSwitch = () => {
    colorMode.toggleColorMode()
    setIsOn(!isOn);
  }

  return (
    <AppBar sx={{
      backgroundColor: getColors().blueAccent[900],
      height: APP_BAR
    }} >
      <Toolbar>
        <IconButton
          onClick={() => setIsSidebarOpen()}
          sx={{
            color: getColors().blueAccent[100]
          }}
        >
          <MenuIcon />
        </IconButton>
        <Link
          href={"/"} style={{
            marginLeft:8
          }}>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image src={`/logo.svg`} alt="logo" height={80} width={80} />
        </Link>

        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <div className="switch" data-ison={isOn} onClick={toggleSwitch} style={{
            background: getColors().grey[900],
            border: "2px solid",
            borderColor: getColors().grey[100],
          }}>
            <motion.div className="handle" layout transition={spring} style={{
              background: getColors().grey[100],
            }} />
          </div>

        </Stack>
      </Toolbar>
    </AppBar>
  );
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export default Header;