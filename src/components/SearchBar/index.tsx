import { Box, Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import { StyledSearchBar } from "./style.css";
import { SearchRounded } from "@mui/icons-material";
import { getColors } from "@/layout/Theme/themes";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  return (
    <Box>
      <StyledSearchBar
        placeholder="Search..."
        value={inputValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        variant="standard"
        InputProps={{
          startAdornment: (
            <SearchRounded
              sx={{
                mt: 1,
                ml: 2,
                mr: 1,
              }}
            />
          ),
          disableUnderline: true,
        }}
      />

      {(inputValue && isFocused) && (
        <Box
          sx={{
            border: `2px solid ${getColors().grey[100]}`,
            borderRadius: "4px",
            padding: "10px",
            zIndex: "1000",
            maxWidth: "60vw",
            width: "60vw",
            overflow: "hidden",
            position: "relative",
            bottom: "2px",
            left: "20px",
            background: getColors().purpleAccent[900],
          }}
        >
          <Typography
            sx={{
              color: getColors().grey[100],
              
            }}
          >
            {inputValue}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default SearchBar;
