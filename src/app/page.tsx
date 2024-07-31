"use client";
import BgcardHome from "@/components/Cards/BgcardHome";
import MediaCard from "@/components/Cards/MediaCard";
import Circle from "@/components/Circle";
import SearchBar from "@/components/SearchBar";
import TransferList from "@/components/TransferList";
import { getColors } from "@/layout/Theme/themes";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Typewriter from "typewriter-effect";
import "./global.css";
import Heading1 from "@/components/TextEffect/Heading1";
import SectionCard1 from "@/components/Cards/SectionCard1";
export default function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: `20vh`,
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          mb:6
        }}
      >
        {/* <BgcardHome /> */}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(`<h1 style="color: grey;">A simple yet powerful</h1>`)
              .pauseFor(300)
              .typeString(
                "<strong><span style='color: red;'>Native web3 plugin</span></strong>"
              )
              .pauseFor(300)
              .deleteChars(18)
              .typeString(
                '<strong><span style="color: #27ae60;">Web3 ENS to hop into different chains.</span> </strong>'
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
      <Box sx={{
        display:"flex",
        flexDirection:{xs:"column", md:"row-reverse"},
        justifyContent:{xs:"column", md:"space-between"},

      }}>
      <Heading1 />
      <Circle />
      </Box>
      <SectionCard1/>
      <Typography
        variant="h4"
        sx={{
          color: getColors().purpleAccent[500],
        }}
      >
        Listen Our PodCasts
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 4,
        }}
      >
        <MediaCard />
        <MediaCard />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 4,
        }}
      >
        <MediaCard />
        <MediaCard />
      </Box>
    </Box>
  );
}
