import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { getColors } from "../Theme/themes";

function Footer() {
  return (
    <Box
      style={{
        alignItems: "flex-end",
        inset: "auto 0 0",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
   
        <Typography sx={{
          color:getColors().grey[100]
        }}>

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
