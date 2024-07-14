import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <Box
      style={{
        alignItems: "flex-end",
        inset: "auto 0 0",
        height: "200px",
        background:
          "linear-gradient(to bottom,transparent 0%,rgb(var(--background-end-rgb)) 40% )",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: "100%"
      }}
    >
   
        <Typography>

        By{" "}
        </Typography>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
    </Box>
  );
}

export default Footer;
