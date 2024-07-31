import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import NavItem from './NavItem/NavItem';
//css
import { CustomDrawer, DrawerHeader } from './style.css';
import { Box, SwipeableDrawer } from '@mui/material';
import {
    Menu as MenuIcon,
  } from "@mui/icons-material";
import { getColors } from '../Theme/themes';
import UserInfo from './Userinfo';

export interface MiniDrawerProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: () => void;
    setShowOutlet: (showOutlet: boolean) => void;
    isNonMobile: boolean;
    navConfig: {
        text: string;
        icon: React.ReactNode | null;
        to: string;
    }[];
    APP_BAR:string
}


const MiniDrawer: React.FC<MiniDrawerProps> = ({ setIsSidebarOpen, isNonMobile, isSidebarOpen, navConfig, setShowOutlet, APP_BAR }) => {
    const theme = useTheme();

    return (
        <Box >
            {isNonMobile ? (
                <CustomDrawer variant="permanent" open={isSidebarOpen} theme={theme}  PaperProps={{
                    sx: {
                      width: APP_BAR,
                      // borderRightStyle: "dashed",
                      backgroundColor:getColors().grey[900],
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      marginTop: "75px",
                      marginLeft: 1,
                      borderRadius: 4,
                      height: "80%",
                      paddingBottom:"40px"
                    },
                  }}  >
                   
                    <List >
                        {navConfig.map((item, index) => (
                            <NavItem isNonMobile={isNonMobile} item={item} key={index} isSidebarOpen={isSidebarOpen} setShowOutlet={setShowOutlet} />
                        ))}
                    </List>
                    {isSidebarOpen && 
                    <UserInfo isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
                    }
                    {isSidebarOpen &&
                    <DrawerHeader>
                        <IconButton onClick={() => setIsSidebarOpen()} >
                            <ChevronLeftIcon />
                        </IconButton>
                    </DrawerHeader>
                    }
                    <Divider/>
                </CustomDrawer>
            ) : (
                <SwipeableDrawer
                        variant="persistent"
                        open={isSidebarOpen} onClose={function (event: React.SyntheticEvent<{}, Event>): void {
                            isSidebarOpen
                            console.log(event);
                            
                        } } onOpen={function (event: React.SyntheticEvent<{}, Event>): void {
                            isSidebarOpen
                            console.log(event);

                        } } 
                        PaperProps={{
                            sx: {
                              // borderRightStyle: "dashed",
                              backgroundColor:getColors().grey[900],
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              marginTop: "75px",
                              marginLeft: 1,
                              borderRadius: 4,
                              height: "80%",
                              paddingBottom:"40px"
                            },
                          }}
                        >

                    <List >
                        {navConfig.map((item, index) => (
                            <NavItem isNonMobile={isNonMobile} item={item} key={index} isSidebarOpen={isSidebarOpen} setShowOutlet={setShowOutlet} />
                        ))}
                    </List>
                    <UserInfo isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>

                    <DrawerHeader>
                        <IconButton onClick={() => setIsSidebarOpen()} >
                            <ChevronLeftIcon />
                        </IconButton>
                    </DrawerHeader>
                    <Divider/>

                </SwipeableDrawer>
            )}
        </Box>


    );
}
export default MiniDrawer;