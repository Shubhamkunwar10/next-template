import { Box } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { getColors } from '@/layout/Theme/themes';

function SocialList() {
  return (
    <Box>
      <FacebookIcon
        sx={{
          color: getColors().grey[100],
          ml:4
        }}
      />
      <InstagramIcon
        sx={{
          color: getColors().grey[100],
          ml:2

        }}
      />
      <XIcon
        sx={{
          color: getColors().grey[100],
          ml:2,
          mr:2

        }}
      />
    </Box>
  );
}

export default SocialList;
