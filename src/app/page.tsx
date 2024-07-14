'use client'
import { getColors } from "@/layout/Theme/themes";
import { Box, Container } from "@mui/material";

export default function Home() {
  return (

    <Box sx={{
      background:getColors().grey[900],
      height:"100vh"
    }}>
     Page
    </Box>
  );
}
