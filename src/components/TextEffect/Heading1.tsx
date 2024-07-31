import React, { useState } from "react";
import "./index.css";
import {
  BottomTitle,
  HeaderSection,
  SweetTitle,
  TitleWrapper,
  TopTitle,
} from "./index.css";
import { Box } from "@mui/material";
function Heading1() {
    const [th,setth]=useState("")
  return (
      <HeaderSection>
        <TitleWrapper>
          <SweetTitle>
            <span data-text="CHAINS">CHAINS</span>
            <span data-text="ENS">ENS</span>
          </SweetTitle>
          <TopTitle>Get me all the</TopTitle>
          <BottomTitle>In one Click</BottomTitle>
        </TitleWrapper>
      </HeaderSection>
  );
}

export default Heading1;
