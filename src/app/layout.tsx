'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  { useState } from "react";

import Navbar from "@/layout/Navigation";
import Header from "@/layout/Header";
import { useMediaQuery } from "@mui/material";

import { ColorModeContext,useMode } from "@/layout/Theme/themes";
import { ThemeProvider } from "@emotion/react";
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
  const APP_BAR = "64px"
  const handleSideBarState = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <html lang="en">

      <body className={inter.className}>
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>

      <Header
      APP_BAR={APP_BAR}
          />
        <Navbar
            APP_BAR={APP_BAR}
            setShowOutlet={setShowOutlet}
            isNonMobile={isNonMobile}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={handleSideBarState}
        />
          {children}
      </ThemeProvider>

      </ColorModeContext.Provider>
        </body>
    </html>
  );
}
