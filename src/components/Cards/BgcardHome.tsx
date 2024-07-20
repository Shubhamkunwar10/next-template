import { getColors } from '@/layout/Theme/themes'
import { Box, Typography } from '@mui/material'
import React from 'react'

function BgcardHome() {
  return (
    <Box sx={{ position: '' }}>
    <Box
      sx={{
        position: 'absolute',
        top: { xs: '15%', md: '80px', lg: 'auto' },
        bottom: { xs: 'auto', md: 'auto', lg: '80%' },
        left: { xs: '10%', md: 'auto', lg: '80%' },
        right: { xs: 'auto', md: '20px', lg: 'auto' },
        background: getColors().greenAccent[800],
        px: 2,
        py: 1,
        fontWeight: 'bold',
        color: getColors().purpleAccent[800],
        zIndex: 1,
      }}
    >
      <Typography sx={{
        color:getColors().grey[100]
      }}>kunwar.eth</Typography>
    </Box>

    <Box
      sx={{
        position: 'absolute',
        display:"block",
        top: { xs: '80px', md: '32%', lg: '20%' },
        right: { xs: '15%', md: '20%', lg: '80%' },
        transform: { md: 'translate(-50%, -50%)' },
        background: getColors().blueAccent[800],
        px: 2,
        py: 1,
        fontWeight: 'bold',
        color: getColors().purpleAccent[800],
        zIndex: 1,
      }}
    >
      <Typography sx={{
        color:getColors().grey[100]
      }}>fomo.eth</Typography>
    </Box>

    <Box
      sx={{
        position: 'absolute',
        top: { xs: '30%', md: '110px', lg: '32%' },
        bottom: { xs: 'auto', md: 'auto', lg: 'auto' },
        left: { xs: '70%', md: '140px', lg: '50%' },
        transform: { lg: 'translate(50%, -50%)' },
        background: 'rgba(128, 0, 0, 0.5)',
        px: 2,
        py: 1,
        fontWeight: 'bold',
        color: getColors().purpleAccent[800],
        zIndex: 1,
      }}
    >
      <Typography sx={{
        color:getColors().grey[100]
      }}>third.eth</Typography>
    </Box>
  </Box>
  )
}

export default BgcardHome