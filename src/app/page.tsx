"use client";
import SearchBar from "@/components/SearchBar";
import TransferList from "@/components/TransferList";
import { getColors } from "@/layout/Theme/themes";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Typewriter from "typewriter-effect";

export default function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: getColors().grey[900],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: `100vh`,
        flexDirection: "column",
        gap: 10,
      }}
    >
      <img
        src="/click.gif"
        alt="1CLIQ"
        style={{
          width: "100px",
          height: "100px",
        }}
      />
      <Box
        sx={{
          maxWidth: "60vw",
          display:"flex",
          justifyContent:"center",
          textAlign:"center"
        }}
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(`<h2 style="color: grey;">A simple yet powerful</h2>`)
              .pauseFor(300)
              .typeString(
                "<strong><span style='color: red;'>native web3 plugin</span></strong>"
              )
              .pauseFor(300)
              .deleteChars(18)
              .typeString(
                '<strong><span style="color: #27ae60;">web3 name to hop into different chains.</span> </strong>'
              )
              .pauseFor(1000)
              .start()
              .callFunction(() => {
                console.log("String typed out!");
              })
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </Box>

      <SearchBar />
    </Box>
  );
}
