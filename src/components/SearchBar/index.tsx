import { Box, Input, TextField } from '@mui/material'
import React from 'react'

function SearchBar() {
  return (
    <Box>
        <TextField id="outlined-basic" label="Search" variant="outlined"
        sx={{
            width:"90vw"
        }} 
        />
    </Box>
  )
}

export default SearchBar