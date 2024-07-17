"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";

import Navbar from "@/layout/Navigation";
import Header from "@/layout/Header";
import { Box, Container, useMediaQuery } from "@mui/material";

import { ColorModeContext, getColors, useMode } from "@/layout/Theme/themes";
import { ThemeProvider } from "@emotion/react";
import navConfig from "@/Data/navConfig";
import Footer from "@/layout/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, colorMode] = useMode();
  const isNonMobile = useMediaQuery("(min-width: 766px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showOutlet, setShowOutlet] = useState<boolean>(false);
  const APP_BAR = "58px";
  const SIDE_BAR = "58px";
  const handleSideBarState = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <html lang="en">
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
      <body className={inter.className} style={{
        padding:0, margin:0,
        background: getColors().grey[900],
      }}>
            <Box
          >

            <Header
              isNonMobile={isNonMobile}
              APP_BAR={APP_BAR}
              setIsSidebarOpen={handleSideBarState}
              />
            <Navbar
              navConfig={navConfig}
              APP_BAR={APP_BAR}
              setShowOutlet={setShowOutlet}
              isNonMobile={isNonMobile}
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={handleSideBarState}
              />
       


            {children}
            <Footer/>
                </Box>
      </body>
          </ThemeProvider>
        </ColorModeContext.Provider>
    </html>
  );
}
