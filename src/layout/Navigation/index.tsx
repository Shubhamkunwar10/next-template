import * as React from "react";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import NavItem from "./NavItem/NavItem";
//css
import { CustomDrawer, DrawerHeader } from "./style.css";
import { Box, Button, SwipeableDrawer, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import navConfig from "./navConfig";

export interface NavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: () => void;
  setShowOutlet: (showOutlet: boolean) => void;
  isNonMobile: boolean;
  APP_BAR: string;
}

const Navbar: React.FC<NavbarProps> = ({
  APP_BAR,
  setIsSidebarOpen,
  isNonMobile,
  isSidebarOpen,
  setShowOutlet,
}) => {
  const theme = useTheme();

  return (
    <>
        {!isNonMobile ? (

      <CustomDrawer
        variant="permanent"
        open={isSidebarOpen}
      >
        <DrawerHeader>
          <IconButton onClick={() => setIsSidebarOpen()}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {navConfig.map((item, index) => (
            <NavItem
              isNonMobile={isNonMobile}
              item={item}
              key={index}
              isSidebarOpen={isSidebarOpen}
              setShowOutlet={setShowOutlet}
            />
          ))}
        </List>
        <Divider />
        {isSidebarOpen && (
          <DrawerHeader>
            <IconButton onClick={() => setIsSidebarOpen()}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
        )}
        <Divider />
      </CustomDrawer>
        ):(
            <Box sx={{
                zIndex:"500"
            }}>
                <Button>
                    klhlk
                </Button>
                <Typography color={"red"}>
                Header

                </Typography>
                </Box>
        )}

    </>
  );
};
export default Navbar;
