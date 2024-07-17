"use client";
import SearchBar from "@/components/SearchBar";
import TransferList from "@/components/TransferList";
import { getColors } from "@/layout/Theme/themes";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        background: getColors().grey[900],
        height: "100vh",
      }}
    >
      <Typography color={getColors().primary[100]} variant="h4">Home</Typography>
      
      <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        mt:"20vh"
      }}>

      <SearchBar/>
      </Box>
    </Box>
  );
}
