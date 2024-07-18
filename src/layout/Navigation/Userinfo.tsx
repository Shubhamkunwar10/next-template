import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, IconButton } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { getColors } from "../Theme/themes";
// Define a styled component for the user information section
const UserInfoBox = styled(Box)(({  }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  backgroundColor: getColors().secondary[900],
  borderColor: getColors().secondary[800],
  borderRadius: "16px",
  padding: "1rem",
  margin: "10px 10px",
}));

const AvatarImage = styled("img")({
  height: "35px",
  width: "35px",
  borderRadius: "50%",
  objectFit: "cover",
  marginRight: "20px",
});

const UserInfoText = styled("div")({
  textAlign: "left",
});

const Username = styled(Typography)({
  variant: "h4",
  fontWeight: "bold",
});

const UserDescription = styled(Typography)(({  }) => ({
  fontWeight: "bold",
  fontSize: "0.9rem",
  color: getColors().secondary[100],
}));

const UserSubtitle = styled(Typography)(({  }) => ({
  fontSize: "0.8rem",
  color: getColors().secondary[200],
}));
const CloseIconButton = styled(IconButton)(({ }) => ({
  zIndex: 9999, // Adjust the z-index value as needed
  marginLeft: "10px",
  color: getColors().secondary[200],
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

// Updated component using the styled components
export default function UserInfo({
  setIsSidebarOpen,
  isSidebarOpen,
}:any) {
  return (
    <UserInfoBox >
      <AvatarImage alt="logo" src="/favicon.svg" />
      <UserInfoText>
        <Username>1CLIQ</Username>
        <UserDescription >ENS</UserDescription>
      </UserInfoText>
      <CloseIconButton
        
        onClick={() => {
          console.log("Close button clicked"); // Add this line
          setIsSidebarOpen(!isSidebarOpen);
        }}
      >
        <CloseOutlinedIcon sx={{ color: getColors().secondary[100] }} />
      </CloseIconButton>
    </UserInfoBox>
  );
}