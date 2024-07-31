import React from 'react';
import {
  StyledBgcardHome,
  StyledBox1,
  StyledBox2,
  StyledBox3,
  StyledTypography,
} from './style.css';

function BgcardHome() {
  return (
    <StyledBgcardHome sx={{ position: '' }}>
      <StyledBox1>
        <StyledTypography>kunwar.eth</StyledTypography>
      </StyledBox1>

      <StyledBox2>
        <StyledTypography>fomo.eth</StyledTypography>
      </StyledBox2>

      <StyledBox3>
        <StyledTypography>third.eth</StyledTypography>
      </StyledBox3>
    </StyledBgcardHome>
  );
}

export default BgcardHome;
